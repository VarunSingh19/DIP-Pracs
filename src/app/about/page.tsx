import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">About DIP Documentation</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive documentation of digital image processing techniques using Scilab.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p>
              This Digital Image Processing (DIP) documentation is a comprehensive resource for students and professionals interested in learning image processing techniques using Scilab. The documentation covers 10 practical exercises that demonstrate various image processing concepts and algorithms.
            </p>
            <p>
              Each practical includes detailed theoretical explanations, step-by-step implementation guides, code examples, and the ability to visualize the output of the code. This makes it an ideal resource for learning and teaching image processing concepts.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Practicals Included</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Practical 1:</strong> Basic Image Operations - brightness adjustment, cropping, rotation, and resizing</li>
              <li><strong>Practical 2:</strong> Image Quantization - reducing intensity levels in images</li>
              <li><strong>Practical 3:</strong> Linear Convolution - implementing convolution for signal processing</li>
              <li><strong>Practical 4:</strong> Circular Convolution - implementing periodic signal processing</li>
              <li><strong>Practical 5:</strong> FFT and IFFT - using Fourier transforms for efficient signal processing</li>
              <li><strong>Practical 6:</strong> Low Pass Filtering - smoothing images and reducing noise</li>
              <li><strong>Practical 7:</strong> High Pass Filtering - enhancing edges and details in images</li>
              <li><strong>Practical 8:</strong> Morphological Operations - implementing dilation, erosion, opening, and closing</li>
              <li><strong>Practical 9:</strong> Advanced Morphological Operations - using different structuring elements</li>
              <li><strong>Practical 10:</strong> Edge Detection - implementing Sobel, Prewitt, and Roberts operators</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Technology Stack</h2>
            <p>
              This documentation website is built using modern web technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Next.js:</strong> A React framework for building fast and responsive web applications</li>
              <li><strong>TypeScript:</strong> For type-safe JavaScript development</li>
              <li><strong>Tailwind CSS:</strong> For responsive and customizable styling</li>
              <li><strong>Shadcn UI:</strong> For accessible and customizable UI components</li>
              <li><strong>Prism React Renderer:</strong> For syntax highlighting of code blocks</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Author</h2>
            <p>
              Varun Singh is a passionate developer and student of image processing. He created this documentation to help others learn and understand digital image processing concepts using Scilab.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="https://github.com/VarunSingh19" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:contact@example.com">
                <Button variant="outline" className="gap-2">
                  <FaEnvelope className="h-4 w-4" />
                  Email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
