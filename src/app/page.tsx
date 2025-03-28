import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FaGithub, FaBook, FaCode } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Digital Image Processing
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    A comprehensive documentation of 10 practical image processing techniques using Scilab.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/practical/1">
                    <Button size="lg" className="gap-1">
                      <FaBook className="mr-2 h-4 w-4" />
                      Get Started
                    </Button>
                  </Link>
                  <Link href="https://github.com/VarunSingh19" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="gap-1">
                      <FaGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video rounded-xl border overflow-hidden bg-white shadow-lg dark:bg-slate-950 w-full max-w-[600px]">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-700 w-full h-full flex items-center justify-center">
                    <FaCode className="text-white h-24 w-24 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore the Practicals</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn various digital image processing techniques through practical exercises.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {Array.from({ length: 10 }, (_, i) => (
                <Card key={i} className="h-full">
                  <CardHeader>
                    <CardTitle>Practical {i + 1}</CardTitle>
                    <CardDescription>
                      {getCardDescription(i + 1)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      {getCardContent(i + 1)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/practical/${i + 1}`} className="w-full">
                      <Button className="w-full">Explore</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About the Author</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  This documentation was created by Varun Singh, a passionate developer and student of image processing.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="https://github.com/VarunSingh19" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <FaGithub className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function getCardDescription(practicalNumber: number): string {
  const descriptions = [
    "Basic Image Operations",
    "Image Quantization",
    "Linear Convolution",
    "Circular Convolution",
    "FFT and IFFT",
    "Low Pass Filtering",
    "High Pass Filtering",
    "Morphological Operations",
    "Morphological Image Operations",
    "Edge Detection",
  ]
  return descriptions[practicalNumber - 1]
}

function getCardContent(practicalNumber: number): string {
  const contents = [
    "Learn about basic image operations such as brightness adjustment, cropping, rotation, and resizing.",
    "Understand how to reduce the number of intensity levels in an image using quantization.",
    "Learn how to implement linear convolution for signal processing in Scilab.",
    "Implement circular convolution for periodic signal processing in Scilab.",
    "Understand how to use Fast Fourier Transform and its inverse for efficient signal processing.",
    "Implement a low pass filter to smooth images and reduce noise.",
    "Implement a high pass filter to enhance edges and details in images.",
    "Learn how to implement morphological operations such as dilation, erosion, opening, and closing.",
    "Explore additional morphological operations on images including dilation, erosion, opening and closing with different structuring elements.",
    "Learn different edge detection techniques including Sobel, Prewitt, and Roberts operators.",
  ]
  return contents[practicalNumber - 1]
}
