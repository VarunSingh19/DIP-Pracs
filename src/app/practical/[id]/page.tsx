import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { RunButton } from "@/components/run-button"

// Practical data
const practicals = {
  1: {
    title: "Basic Image Operations",
    description: "Learn about basic image operations such as brightness adjustment, cropping, rotation, and resizing.",
    content: `
This practical demonstrates various basic image operations that can be performed using Scilab.

We'll explore the following operations:
- **imadd**: Adds a constant value to each pixel (brightness increase)
- **imabsdiff**: Computes the absolute difference between each pixel and a constant value
- **imdivide**: Divides each pixel intensity by a constant value (reduces brightness)
- **immultiply**: Multiplies each pixel intensity by a constant value (increases contrast)
- **imcrop**: Crops a rectangular region from the image ([x, y, width, height])
- **imrotate**: Rotates the image by a specified angle (in degrees)
- **imresize**: Resizes the image to specified dimensions ([height, width])

These operations are fundamental to image processing and manipulation. Each operation changes the image in a specific way, allowing you to adjust the visual properties of the image as needed.
    `,
    code: `im = imread(fullpath(getIPCVpath() + "/images/" + 'baboon.png'));

im_add = imadd(im, 50);
im_absdiff = imabsdiff(im, 100);
im_divide = imdivide(im, 2);
im_multiply = immultiply(im, 1.5);
im_crop = imcrop(im, [50, 50, 100, 100]);
im_rotate = imrotate(im, 45);
im_resize = imresize(im, [200, 200]);

subplot(2, 4, 1), imshow(im), title("Original Image");
subplot(2, 4, 2), imshow(im_add), title("imadd");
subplot(2, 4, 3), imshow(im_absdiff), title("imabsdiff");
subplot(2, 4, 4), imshow(im_divide), title("imdivide");
subplot(2, 4, 5), imshow(im_multiply), title("immultiply");
subplot(2, 4, 6), imshow(im_crop), title("imcrop");
subplot(2, 4, 7), imshow(im_rotate), title("imrotate");
subplot(2, 4, 8), imshow(im_resize), title("imresize");`
  },
  2: {
    title: "Image Quantization",
    description: "Understand how to reduce the number of intensity levels in an image using quantization.",
    content: `
Image quantization is a process that reduces the number of distinct colors or intensity levels used in an image. This practical demonstrates how to implement quantization in Scilab.

**Key Concepts:**
- Quantization reduces the number of intensity levels in an image, making it easier to store and process.
- The image is divided by a quantization step (c), then mapped back to the 0-255 range for display.

**Step-by-Step Process:**
1. Convert the image to double precision for accurate calculations.
2. Compute the maximum pixel value.
3. Get the number of bits for quantization from user input.
4. Calculate the quantization step based on the number of levels.
5. Apply floor division to reduce intensity levels.
6. Normalize the quantized image back to the 0-255 range.
7. Display the original and quantized images.

**Applications:**
- Image compression
- Reducing storage requirements
- Creating artistic effects
- Simplifying image analysis
    `,
    code: `im = imread(fullpath(getIPCVpath() + "/images/" + 'baboon.png'));
im = double(im);
b = max(im);

in = input("Enter the number of bits: ");

c = b / (2^in);

f = floor(im / c);
f1 = (f * 255) / max(f);

figure, imshow(uint8(im)), title("Original Image");
figure, imshow(uint8(f1)), title("Quantized Image");`
  },
  3: {
    title: "Linear Convolution",
    description: "Learn how to implement linear convolution for signal processing in Scilab.",
    content: `
Linear convolution is a mathematical operation that takes two sequences and produces a third sequence representing how one sequence modifies the other.

**Key Concepts:**
- Linear convolution computes the output sequence by sliding one sequence over another and summing element-wise products.
- It is widely used in signal processing for filtering and system response analysis.

**Mathematical Foundation:**
For two discrete sequences x[n] and h[n], the linear convolution y[n] is defined as:
y[n] = Σ x[k] × h[n-k]

**Implementation Steps:**
1. The user inputs two sequences (x and h).
2. Their lengths are determined, and the output length is calculated.
3. A zero-initialized array y is created to store the result.
4. Nested loops iterate over both sequences, multiplying and summing values at appropriate positions.
5. The computed convolution result is displayed.

**Applications:**
- Digital filtering
- System response analysis
- Feature extraction
- Signal processing
    `,
    code: `x = input("Enter first sequence: ")
h = input("Enter second sequence: ")

n1 = length(x)
n2 = length(h)


N = n1 + n2 - 1

y = zeros(1, N)

for i = 1:n1
    for j = 1:n2
        y(i + j - 1) = y(i + j - 1) + x(i) * h(j)
    end
end


disp("Convolution result: ")
disp(y)

plot(y)`
  },
  4: {
    title: "Circular Convolution",
    description: "Implement circular convolution for periodic signal processing in Scilab.",
    content: `
Circular convolution is a special type of convolution that treats the input sequences as periodic. This practical demonstrates how to implement circular convolution in Scilab.

**Key Concepts:**
- Circular convolution wraps around when summing element-wise products, treating sequences as periodic.
- It is useful in digital signal processing for efficient filtering using the DFT.

**Mathematical Foundation:**
For two discrete sequences x[n] and h[n] both of length N, the circular convolution y[n] is defined as:
y[n] = Σ x[k] × h[(n-k) mod N]

**Implementation Steps:**
1. The user inputs two sequences (g and o).
2. The shorter sequence is zero-padded to match the longer one.
3. A zero-initialized array y is created for storing results.
4. Nested loops iterate over the sequences, computing element-wise products with manual wrap-around handling.
5. The computed circular convolution result is displayed and plotted.

**Applications:**
- Fast convolution using FFT
- Cyclic signal processing
- Frequency domain filtering
- Digital signal processing algorithms
    `,
    code: `g = input("Enter first sequence: ");
o = input("Enter second sequence: ");


n1 = length(g);
n2 = length(o);
n = max(n1, n2);
n3 = n1 - n2;

if (n3 > 0)
    o = [o, zeros(1, n3)];
else
    g = [g, zeros(1, -n3)];
end

y = zeros(1, n);

for p = 1:n
    y(p) = 0;
    for q = 1:n
        k = p - q + 1;
        if k < 1
            k = k + n;
        end
        y(p) = y(p) + g(q) * o(k);
    end
end


disp("Circular Convolution result: ");
disp(y);

plot(y);`
  },
  5: {
    title: "FFT and IFFT",
    description: "Understand how to use Fast Fourier Transform and its inverse for efficient signal processing.",
    content: `
The Fast Fourier Transform (FFT) and Inverse Fast Fourier Transform (IFFT) are fundamental algorithms in digital signal processing. This practical demonstrates how to use FFT and IFFT in Scilab for efficient convolution.

**Key Concepts:**
- **FFT (Fast Fourier Transform)** converts a time-domain signal into its frequency components, making convolution faster by transforming it into multiplication.
- **IFFT (Inverse Fast Fourier Transform)** converts the frequency-domain signal back to the time domain, retrieving the original or convolved signal.

**Convolution Theorem:**
The convolution theorem states that convolution in the time domain equals multiplication in the frequency domain:
x(t) * h(t) ⟷ X(f) · H(f)

**Implementation Steps:**
1. The user inputs two sequences.
2. Both sequences are zero-padded to ensure proper convolution.
3. FFT is applied to both sequences.
4. The FFT results are multiplied element-wise.
5. IFFT is applied to the product to obtain the convolution result.
6. The result is plotted.

**Computational Advantage:**
- Direct convolution has O(n²) complexity.
- FFT-based convolution has O(n log n) complexity, making it much faster for large sequences.
    `,
    code: `g = input("Enter the first-vector-g-asa row vector): ");
h = input("Enter the second vector has a com veutor): ");


m = length(g);
n = length(h);
N = m + n - 1

g = [g, zeros(1, N - m)]
h =  [h, zeros(1, N - n)]

f1 = fft(g)
f2 = fft(h)

f3 = f1 .* f2
f4 = ifft(f3)
plot2d3 (f4)`
  },
  6: {
    title: "Low Pass Filtering",
    description: "Implement a low pass filter to smooth images and reduce noise.",
    content: `
Low pass filtering is a technique used to remove high-frequency components from an image, resulting in a smoother appearance. This practical demonstrates how to implement a simple low pass filter in Scilab.

**Key Concepts:**
- **Low Pass Filtering** smoothens the image by averaging surrounding pixel values, reducing noise and high-frequency components.
- **Nested Loops** iterate over the image pixels (excluding the border) to apply the filter.
- **Convolution Operation** replaces each pixel with the weighted sum of its neighboring pixels using a **3×3 averaging kernel**.
- **Blurring Effect** helps in removing sharp edges and details while keeping low-frequency components.

**Filter Kernel:**
The 3×3 averaging kernel used in this practical is:
[1 1 1]
[1 1 1]
[1 1 1]

Each value is divided by 9 to maintain the overall brightness of the image.

**Applications:**
- Noise reduction
- Image smoothing
- Pre-processing for feature extraction
- Blurring unwanted details
    `,
    code: `a = imread(fullpath(getIPCVpath()) + "/images/" + 'puffin.png');
d = double(a);
[m, n] = size(d);

w = [1 1 1; 1 1 1; 1 1 1];

b = zeros(m, n);

for i = 2:m-1
    for j = 2:n-1
        b(i, j) = (w(1)*d(i-1, j+1) + w(2)*d(i, j+1) + w(3)*d(i+1, j+1) + w(4)*d(i-1, j) + w(5)*d(i, j)   + w(6)*d(i+1, j) + w(7)*d(i-1, j-1) + w(8)*d(i, j-1) + w(9)*d(i+1, j-1)) / 9;
    end
end

x = uint8(b);

figure(1)
imshow(a)
title("Original Image")

figure(2)
imshow(x)
title("Low Pass Filtered Image")`
  },
  7: {
    title: "High Pass Filtering",
    description: "Implement a high pass filter to enhance edges and details in images.",
    content: `
High pass filtering is a technique used to enhance edges and details in an image by emphasizing high-frequency components. This practical demonstrates how to implement a simple high pass filter in Scilab.

**Key Concepts:**
- **High Pass Filtering** enhances edges and sharp details by highlighting rapid intensity changes while suppressing smooth regions.
- **Kernel Definition**: The **3×3 high-pass filter kernel** has a center value of **8** (to boost the pixel) and **-1** at surrounding pixels (to subtract background).
- **Edge Detection Effect**: This highlights features like object boundaries while removing uniform areas.
- **Absolute Values**: Since high-pass filtering may result in negative values, \`abs()\` is used to keep valid pixel intensities.

**Filter Kernel:**
The 3×3 high-pass kernel used in this practical is:
[-1 -1 -1]
[-1  8 -1]
[-1 -1 -1]

**Applications:**
- Edge detection
- Feature extraction
- Image sharpening
- Text extraction
- Detail enhancement
    `,
    code: `a = imread(fullpath(getIPCVpath()) + "/images/" + 'puffin.png');
d = double(a);
[m, n] = size(d);


w = [-1 -1 -1; -1 8 -1; -1 -1 -1];

b = zeros(m, n);


for i = 2:m-1
    for j = 2:n-1
        b(i, j) = (w(1)*d(i-1, j+1) + w(2)*d(i, j+1) + w(3)*d(i+1, j+1) + w(4)*d(i-1, j) + w(5)*d(i, j)  + w(6)*d(i+1, j) + w(7)*d(i-1, j-1) + w(8)*d(i, j-1) + w(9)*d(i+1, j-1));
    end
end

x = uint8(abs(b));

figure(1)
imshow(a)
title("Original Image")

figure(2)
imshow(x)
title("High Pass Filtered Image")`
  },
  8: {
    title: "Morphological Operations",
    description: "Learn how to implement morphological operations such as dilation, erosion, opening, and closing.",
    content: `
Morphological operations are a set of non-linear operations related to the shape or morphology of features in an image. This practical demonstrates how to implement basic morphological operations in Scilab.

**Key Morphological Operations:**

**1. Dilation**
- Dilation "grows" or thickens objects in a binary or grayscale image.
- The extent of growth is controlled by the structuring element (SE).
- Mathematically, for a binary image A and structuring element B, the dilation of A by B is given by:
  A ⊕ B = {z | (B̂)z ∩ A ≠ ∅}

**2. Erosion**
- Erosion "shrinks" or thins objects in a binary or grayscale image.
- The extent of shrinkage is also controlled by the structuring element.
- Mathematically, erosion of A by B is:
  A ⊖ B = {z | (B)z ⊆ A}

**3. Opening**
- Opening is defined as an erosion followed by a dilation:
  A ∘ B = (A ⊖ B) ⊕ B
- It is typically used to remove small objects or noise while preserving the overall shape and size of larger objects.

**4. Closing**
- Closing is defined as a dilation followed by an erosion:
  A • B = (A ⊕ B) ⊖ B
- It is typically used to fill small holes and gaps in objects while preserving the overall shape.

**Applications:**
- Noise removal
- Object segmentation
- Feature extraction
- Image preprocessing
- Boundary detection
    `,
    code: `// Clear command window and workspace
clc;
clear all;

// 1. Read the input image
I = imread('C:\\Users\\admin\\Desktop\\image.jpg');

// 2. Define the structuring element
//    You can change 'disk' and its radius (e.g., 5) as needed
se = strel('disk', 5);

// 3. Perform Dilation
dimg = imdilate(I, se);

// 4. Perform Erosion
eimg = imerode(I, se);

// 5. Perform Opening
oimg = imopen(I, se);

// 6. Perform Closing
cimg = imclose(I, se);

// 7. Display results
//    Option A: Separate figure windows
figure(1);
imshow(I);
title('Original Image');

figure(2);
imshow(dimg);
title('Dilated Image');

figure(3);
imshow(eimg);
title('Eroded Image');

figure(4);
imshow(oimg);
title('Opened Image');

figure(5);
imshow(cimg);
title('Closed Image');`
  },
  9: {
    title: "Morphological Image Operations",
    description: "Explore additional morphological operations on images including dilation, erosion, opening and closing with different structuring elements.",
    content: `
This practical expands on morphological operations by applying them with different structuring elements. We'll use both rectangular and cross-shaped structuring elements to observe how they affect the results.

**Key Concepts:**

- **Structuring Elements (SE)** determine how morphological operations affect the image. Common shapes include:
  - Rectangular: Affects uniform expansion/contraction
  - Cross: Emphasizes specific directions
  - Elliptical: Provides smooth edges

- **Dilation** expands bright regions in the image, which can:
  - Fill small holes
  - Connect nearby features
  - Enlarge objects

- **Erosion** shrinks bright regions in the image, which can:
  - Remove small objects
  - Separate connected components
  - Reduce object size

- **Opening and Closing** are combinations that provide specific effects:
  - Opening (erosion followed by dilation) removes small bright spots and thin connections
  - Closing (dilation followed by erosion) fills small holes and gaps

**Applications:**
- Object detection
- Image segmentation
- Feature extraction
- Noise removal
- Edge detection
    `,
    code: `im = imread(fullpath(getIPCVpath()) + "/images/" + 'puffin.png');

se = imcreatese('rect', 3, 3);
dilate = imdilate(im, se);
erode = imerode(im, se);

e = imcreatese('cross', 9, 9);
dilate1 = imdilate(im, e);
erode2 = imerode(im, e);

S2 = imopen(im, e);
S3 = imclose(im, e);

figure(1);
subplot(2, 3, 1);
imshow(dilate);
title("Dilation (Rectangular)");

subplot(2, 3, 2);
imshow(erode);
title("Erosion (Rectangular)");

subplot(2, 3, 3);
imshow(dilate1);
title("Dilation (Elliptical)");

subplot(2, 3, 4);
imshow(erode2);
title("Erosion (Elliptical)");

subplot(2, 3, 5);
imshow(im);
title("Original Image");

subplot(2, 3, 6);
imshow(S3);
title("Closing Operation");`
  },
  10: {
    title: "Edge Detection",
    description: "Learn different edge detection techniques including Sobel, Prewitt, and Roberts operators.",
    content: `
Edge detection is a fundamental image processing technique used to identify boundaries within images. This practical demonstrates three common edge detection operators: Sobel, Prewitt, and Roberts.

## Sobel Operator

The Sobel operator uses two 3×3 kernels to approximate image gradients in horizontal and vertical directions:

**Horizontal Kernel (x):**
\`\`\`
[-1  0  1]
[-2  0  2]
[-1  0  1]
\`\`\`

**Vertical Kernel (y):**
\`\`\`
[-1 -2 -1]
[ 0  0  0]
[ 1  2  1]
\`\`\`

## Prewitt Operator

The Prewitt operator is similar to Sobel but uses uniform weights in the kernels:

**Horizontal Kernel (x):**
\`\`\`
[-1  0  1]
[-1  0  1]
[-1  0  1]
\`\`\`

**Vertical Kernel (y):**
\`\`\`
[-1 -1 -1]
[ 0  0  0]
[ 1  1  1]
\`\`\`

## Roberts Operator

The Roberts operator uses 2×2 kernels to detect edges at 45° angles:

**Diagonal Kernel 1 (x):**
\`\`\`
[ 1  0]
[ 0 -1]
\`\`\`

**Diagonal Kernel 2 (y):**
\`\`\`
[ 0  1]
[-1  0]
\`\`\`

**Applications:**
- Feature detection
- Image segmentation
- Object recognition
- Medical image analysis
- Computer vision systems
    `,
    code: `// Sobel Edge Detection
a = imread(fullpath(getIPCVpath()) + "/images/" + 'puffin.png');
a = rgb2gray(a)
a = double(a)

[m, n] = size(a);

x = [-1 0 1; -2 0 2; -1 0 1];
y = [-1 -2 -1; 0 0 0; 1 2 1];

h_x = zeros(m, n);
h_y = zeros(m, n);


for i = 2:m-1
    for j = 2:n-1
        h_x(i,j) = x(1,1)*a(i-1,j-1) + x(1,2)*a(i-1,j) + x(1,3)*a(i-1,j+1) + x(2,1)*a(i,j-1)   + x(2,2)*a(i,j)   + x(2,3)*a(i,j+1) + x(3,1)*a(i+1,j-1) + x(3,2)*a(i+1,j) + x(3,3)*a(i+1,j+1);

        h_y(i,j) = y(1,1)*a(i-1,j-1) + y(1,2)*a(i-1,j) + y(1,3)*a(i-1,j+1) + y(2,1)*a(i,j-1)   + y(2,2)*a(i,j)   + y(2,3)*a(i,j+1)   + y(3,1)*a(i+1,j-1) + y(3,2)*a(i+1,j) + y(3,3)*a(i+1,j+1);
    end
end

subplot(2,2,1);
imshow(uint8(a));
title("Original Image");

subplot(2,2,2);
imshow(uint8(h_x));
title("X-axis Gradient");

subplot(2,2,3);
imshow(uint8(h_y));
title("Y-axis Gradient");`
  }
};

type Props = {
  params: { id: string }
}

export default async function PracticalPage({
  params,
}: {
  // Here we type params as a Promise that resolves to an object with id.
  params: Promise<{ id: string }>
}) {
  // Await params before using it.
  const { id } = await params;
  const practicalId = Number(id);

  if (!practicalId || practicalId < 1 || practicalId > 10 || !practicals[practicalId as keyof typeof practicals]) {
    notFound();
  }

  const practical = practicals[practicalId as keyof typeof practicals];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">
        Practical {practicalId}: {practical.title}
      </h1>
      <p className="text-xl text-muted-foreground">
        {practical.description}
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Practical Details</CardTitle>
          <CardDescription>Read the theory and run the code</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="theory" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="theory">Theory</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="theory" className="space-y-4">
              <div className="prose max-w-none dark:prose-invert">
                {practical.content.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="code">
              <div className="space-y-4">
                <CodeBlock
                  code={practical.code}
                  language="matlab"
                  title="Scilab Code"
                />
                <RunButton practicalNumber={practicalId} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
