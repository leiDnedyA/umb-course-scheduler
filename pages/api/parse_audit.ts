import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.AUDIT_PARSE_API_URL) {
    return res.status(500).json({ error: 'AUDIT_PARSE_API_URL environment variable is not set' });
  }

  try {
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    
    if (!files.file?.[0]) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = files.file[0];
    const fileData = await fs.readFile(file.filepath);
    
    const formData = new FormData();
    formData.append('file', new Blob([fileData]), file.originalFilename || 'audit.pdf');

    const response = await fetch(process.env.AUDIT_PARSE_API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to parse audit. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data === null || !data?.data?.entry_data || data.data.entry_data.length === 0 || !data?.data?.req_data || data.data.req_data.length === 0) {
      return res.status(400).json({ error: 'Invalid audit data.' });
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Error parsing audit:', error);
    return res.status(500).json({ error: 'Failed to parse audit' });
  }
}
