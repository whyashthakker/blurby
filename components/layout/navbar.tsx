import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

const navigation = [
  { 
    name: "Features", 
    href: "/#features",
    dropdown: [
      { name: "AI Detection", href: "/features/ai-detection" },
      { name: "Screen Recording Privacy", href: "/features/screen-recording-privacy" },
      { name: "API Key Protection", href: "/features/api-key-protection" },
      { name: "Video Conference Integration", href: "/features/zoom-google-meet-integration" },
      { name: "Real-Time Blur Detection", href: "/features/real-time-blur-detection" },
      { name: "Custom Blur Areas", href: "/features/custom-blur-areas" },
    ]
  },
  { name: "Pricing", href: "/#pricing" },
  { name: "Testimonials", href: "/#testimonials" },
  { 
    name: "Compare", 
    href: "#",
    dropdown: [
      { name: "vs BlurIt", href: "/compare/blurit" },
      { name: "vs ZeroBlur", href: "/compare/zeroblur" },
      { name: "vs BlurWeb", href: "/compare/blurweb" },
      { name: "vs Blinqo", href: "/compare/blinqo" },
      { name: "vs Blur.page", href: "/compare/blurpage" },
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Blurby"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-cal">Blurby</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-6">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                    <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link href={dropdownItem.href} className="w-full">
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <div className="hidden md:flex md:gap-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Blurby - $19
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="space-y-2">
                      <div className="px-2 py-1 text-lg font-medium">{item.name}</div>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-2 py-1 text-sm text-muted-foreground"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="ghost" asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>
                  <Button asChild>
                    <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                      Get Blurby - $19
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
