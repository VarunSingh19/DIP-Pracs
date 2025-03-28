"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mapping of practical numbers to their output images
const practicalOutputs: Record<number, {title: string, images: {src: string, caption: string}[]}> = {
  1: {
    title: "Basic Image Operations",
    images: [
      {
        src: "https://i.imgur.com/zOcJbW2.png",
        caption: "Original and processed images showing various basic operations"
      }
    ]
  },
  2: {
    title: "Image Quantization",
    images: [
      {
        src: "https://i.imgur.com/wUQJNH2.png",
        caption: "Original image"
      },
      {
        src: "https://i.imgur.com/5JmB7xF.png",
        caption: "Quantized image with fewer intensity levels"
      }
    ]
  },
  3: {
    title: "Linear Convolution",
    images: [
      {
        src: "https://i.imgur.com/cXnIVVu.png",
        caption: "Plot of linear convolution result"
      }
    ]
  },
  4: {
    title: "Circular Convolution",
    images: [
      {
        src: "https://i.imgur.com/kFjpTdZ.png",
        caption: "Plot of circular convolution result"
      }
    ]
  },
  5: {
    title: "FFT and IFFT",
    images: [
      {
        src: "https://i.imgur.com/L4KmPVr.png",
        caption: "Plot of FFT-based convolution result"
      }
    ]
  },
  6: {
    title: "Low Pass Filtering",
    images: [
      {
        src: "https://i.imgur.com/5JmB7xF.png",
        caption: "Original image"
      },
      {
        src: "https://miro.medium.com/v2/resize:fit:1400/1*GXpwWN8--KtM3GM2dxxntQ.png",
        caption: "Low pass filtered image showing smoothing effect"
      }
    ]
  },
  7: {
    title: "High Pass Filtering",
    images: [
      {
        src: "https://i.imgur.com/5JmB7xF.png",
        caption: "Original image"
      },
      {
        src: "https://i.sstatic.net/M24re.png",
        caption: "High pass filtered image showing edge enhancement"
      }
    ]
  },
  8: {
    title: "Morphological Operations",
    images: [
      {
        src: "https://i.imgur.com/5JmB7xF.png",
        caption: "Original image"
      },
      {
        src: "https://i.imgur.com/QhY1dFn.png",
        caption: "Dilated image"
      },
      {
        src: "https://i.imgur.com/pzGCQfS.png",
        caption: "Eroded image"
      },
      {
        src: "https://i.imgur.com/23rNCXT.png",
        caption: "Opened image"
      },
      {
        src: "https://i.imgur.com/K8fLnbF.png",
        caption: "Closed image"
      }
    ]
  },
  9: {
    title: "Morphological Image Operations",
    images: [
      {
        src: "https://i.imgur.com/5JmB7xF.png",
        caption: "Original image"
      },
      {
        src: "https://i.imgur.com/QhY1dFn.png",
        caption: "Dilation (Rectangular)"
      },
      {
        src: "https://i.imgur.com/pzGCQfS.png",
        caption: "Erosion (Rectangular)"
      }
    ]
  },
  10: {
    title: "Edge Detection",
    images: [
      {
        src: "https://i.imgur.com/5JmB7xF.png",
        caption: "Original grayscale image"
      },
      {
        src: "https://jmlb.github.io/images/20180630/img_02.png",
        caption: "Sobel edge detection result showing vertical edges"
      },
      {
        src: "https://ars.els-cdn.com/content/image/1-s2.0-S1746809417301751-gr8.jpg",
        caption: "Different edge detection methods comparison"
      }
    ]
  }
}

interface RunButtonProps {
  practicalNumber: number
}

export function RunButton({ practicalNumber }: RunButtonProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleRun = () => {
    setIsRunning(true)
    // Simulate loading time
    setTimeout(() => {
      setIsRunning(false)
      setIsOpen(true)
    }, 1500)
  }

  const output = practicalOutputs[practicalNumber];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        onClick={handleRun}
        disabled={isRunning}
        className="mt-2"
      >
        <Play className="mr-2 h-4 w-4" />
        {isRunning ? "Running..." : "Run Code"}
      </Button>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Output - Practical {practicalNumber}: {output?.title}</DialogTitle>
          <DialogDescription>
            Result of running the Scilab code for Practical {practicalNumber}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-8 py-4">
          {output?.images.map((image, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="border rounded-md overflow-hidden max-w-full">
                <img
                  src={image.src}
                  alt={`Output ${i+1} for Practical ${practicalNumber}`}
                  className="max-w-full max-h-[500px] object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{image.caption}</p>
            </div>
          ))}
          {!output && (
            <p className="text-center py-8">No output available for this practical</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
