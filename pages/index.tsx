import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            UMass Boston Course Scheduler
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            Plan your perfect semester with our intelligent course scheduling tool, designed specifically for UMass Boston students.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full mt-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Automatically find conflict-free schedules that fit your preferences and requirements.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Real-Time Availability</h3>
              <p className="text-muted-foreground">
                See up-to-date course availability and waitlist information.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Degree Progress</h3>
              <p className="text-muted-foreground">
                Track your progress towards your degree requirements as you plan.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link href="/schedule" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium">
              Get Started
            </Link>
            <Link href="#" className="border border-input hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-md font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
