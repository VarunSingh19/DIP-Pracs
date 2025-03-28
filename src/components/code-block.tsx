"use client"
import { Highlight, themes } from "prism-react-renderer"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { FaCopy, FaCheck } from "react-icons/fa"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
  title?: string
  className?: string
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  title,
  className = ''
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative rounded-lg overflow-hidden my-6 border shadow-lg ${className}`}>
      {title && (
        <div className="bg-muted/10 px-4 py-2 border-b text-sm font-mono flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className="absolute right-2 top-2 z-10 h-8 w-8"
        >
          {copied ? (
            <FaCheck className="h-4 w-4 text-green-500" />
          ) : (
            <FaCopy className="h-4 w-4" />
          )}
        </Button>
        <Highlight
          theme={resolvedTheme === 'dark' ? themes.vsDark : themes.vsLight}
          code={code}
          language={language}
        >
          {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${highlightClassName} p-4 overflow-x-auto text-sm leading-relaxed`}
              style={{
                ...style,
                backgroundColor: resolvedTheme === 'dark'
                  ? 'rgb(24, 24, 27)'
                  : 'rgb(250, 250, 250)'
              }}
            >
              {tokens.map((line, i) => {
                const { key, ...lineProps } = getLineProps({ line, key: i });
                return (
                  <div key={key as React.Key} {...lineProps} className="flex">
                    {showLineNumbers && (
                      <span className="inline-block w-8 text-right mr-4 opacity-50 select-none">
                        {i + 1}
                      </span>
                    )}
                    <div className="flex-1">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  </div>
                );
              })}

            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
