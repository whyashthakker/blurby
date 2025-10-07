import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blurby Comparisons",
  description: "See how Blurby compares to other privacy tools",
}

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}