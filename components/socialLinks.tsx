import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const socialLinks = [
    { icon: Mail, label: "Talegram", href: "https://t.me/+e6weorQQ4Js3ZjM1" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/yourpage" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/Hinditechguides" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/hinditechguide" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hindi-tech-guide-727497386/recent-activity/all/" },
    { icon: Mail, label: "Email", href: "mailto:mhinditechguide@gmail.com" },]

export function ReachUs() {
    return (
        <section className="bg-gradient-to-b from-background to-muted/10 py-12 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach Us</h2>
                <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                    हमसे जुड़ने के लिए नीचे दिए गए किसी भी माध्यम का उपयोग करें। सोशल मीडिया, ईमेल या कॉल – हम हमेशा आपके लिए उपलब्ध हैं।
                </p>

                {/* Social Links */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6 justify-center items-center mb-8">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-3 rounded-lg bg-background hover:bg-primary/10 transition-colors"
                        >
                            <link.icon className="h-6 w-6 text-primary mb-1" />
                            <span className="text-xs sm:text-sm text-muted-foreground">{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="mailto:contact@hinditechguide.com">ईमेल भेजें</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent" asChild>
                        <Link href="/contact">Contact Form</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
