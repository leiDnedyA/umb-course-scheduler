import { Card } from "@/components/ui/card";

export default function SchedulePage() {
  const dummyRequiredCourses = [
    "CS 110: Introduction to Computing",
    "CS 240: Programming Methodology",
    "MATH 140: Calculus I",
    "ENGL 101: Freshman English I",
    "PHYS 113: General Physics I",
    "HIST 101: Western Civilization I"
  ];

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Course Schedule Builder</h1>
          <p className="text-xl text-muted-foreground">
            Create your perfect semester schedule by selecting courses and visualizing your weekly calendar.
          </p>
        </div>

        {/* Schedule Display Area */}
        <div className="w-full h-[600px] border rounded-lg bg-card p-4">
          <p className="text-center text-muted-foreground">
            Your schedule will appear here
          </p>
        </div>

        {/* Required Courses Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Required Courses</h2>
          <div className="grid gap-2">
            {dummyRequiredCourses.map((course, index) => (
              <div 
                key={index}
                className="p-3 border rounded-md hover:bg-accent transition-colors"
              >
                {course}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
