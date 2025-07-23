import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoreOfferings from "@/components/CoreOfferings";
import SignatureWork from "@/components/SignatureWork";
import LetsCollaborate from "@/components/LetsCollaborate";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <section>
            <HeroSection />
            <About />
            <WhyChooseUs />
            <CoreOfferings />
            <SignatureWork />
            <LetsCollaborate />
            <Footer />
        </section>
    );
}
