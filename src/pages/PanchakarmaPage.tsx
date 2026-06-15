import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PanchakarmaPage() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { ref: ref2, isVisible: vis2 } = useScrollReveal(0.1);

  return (
    <>
      <PageHero
        title="Panchakarma Treatment"
        subtitle="28 Days of Authentic Purification & Renewal"
        backgroundImage="/img/ayurvedapage/314962107_566571368608410_5904308292292831319_n.jpg"
        breadcrumb="Panchakarma"
      />

      <section className="py-20 sm:py-28 bg-background">
        <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-accent/20">
              <img src="/img/ayurvedapage/314962107_566571368608410_5904308292292831319_n.webp" alt="Panchakarma Ayurvedic treatment" className="w-full h-[400px] sm:h-[480px] object-cover" loading="lazy" />
            </div>
            <div className="space-y-6">
              <span className="section-label">28 Days Program</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark leading-tight">
                28 Days Panchakarma Treatment in Kerala
              </h2>
              <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed">
                Chamundi Hill Palace is providing 28 days Panchakarma treatment in Kerala for purification of the body.
                This type of treatment is a purification process carried out by eliminating many toxins from the body.
                It includes five different types of therapies.
              </p>
              <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed">
                These five different purification therapies are carried out with the aim of improving the health condition
                to a great extent. By the end of the treatment process the body gets toned. The functions of sensory organs
                is greatly improved. This includes improvement in metabolism, mental relaxation and an overall feeling of well being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Therapies */}
      <section className="py-20 bg-surface">
        <div ref={ref2} className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-700 ${vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">The Five Actions</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Five Purification Therapies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Vamana', desc: 'Therapeutic emesis for upper body cleansing and Kapha balancing' },
              { name: 'Virechana', desc: 'Purgation therapy for detoxifying the liver, spleen and lower GI tract' },
              { name: 'Nasya', desc: 'Nasal administration of herbal oils for head and sinus purification' },
              { name: 'Basti', desc: 'Medicated enema therapy — considered the most powerful of the five actions' },
              { name: 'Raktamokshana', desc: 'Blood purification therapy to address skin, blood and Pitta disorders' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:border-t-3 hover:border-t-primary transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <span className="font-heading text-sm font-bold text-accent">{i + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-2">{t.name}</h3>
                <p className="font-body text-sm text-text/70 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
