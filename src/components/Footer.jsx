import { ArrowUp } from "lucide-react"


export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative bordert-t border-border mt-12 pt- flex flex-wrap justify-center items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} TuanTuong.co All rights reserved.
      </p>
      <a
        href="#hero"
        className="fixed bottom-6 right-6 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-lg"
      >
        <ArrowUp size={20} />
      </a>

    </footer>
  )
}
