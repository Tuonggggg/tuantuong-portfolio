import { Facebook, Link, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from '@/lib/utils'

export const ContactSection = () => {

  return (
    <section
      id="contact"
      className="py-24 px-4  relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thanks for visiting my portfolio! If you have any questions, ideas, or just want to say hi,
          feel free to reach out. I’d love to connect with you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Contact Email</h4>
                  <a href="mailto:httuongdev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    httuongdev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone Number</h4>
                  <a href="tel:+8494757384"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    + 0947 757 384
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Current Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Ho Chi Minh City, Vietnam
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Contact With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Facebook />
                </a>
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus-primary"
                  placeholder="Tuan Tuong ..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus-primary"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="button" // đổi từ submit thành button để không reload trang
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2',
                )}
                onClick={() => alert('⚠️ Xin lỗi, chức năng này hiện chưa hoàn thành.')}
              >
                Send message
                <Send size={16} />
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
