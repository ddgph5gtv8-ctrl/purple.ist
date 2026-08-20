import type { Metadata } from 'next';
import Link from 'next/link';

import { AssetImage } from '@/components/shared/AssetImage';
import { Section } from '@/components/shared/Section';

export const metadata: Metadata = {
  title: "CEO'nuz Markanızın En Güçlü İletişim Kanalı Olabilir mi?",
  description:
    'Lider iletişimi, marka güveni ve kurumsal itibarın nasıl güçlendirilebileceğine dair Purple’nin bakış açısı.',
  alternates: {
    canonical: '/perspektif/ceo-iletisimi',
  },
  openGraph: {
    title: "CEO'nuz Markanızın En Güçlü İletişim Kanalı Olabilir mi? | Purple Perspektif",
    description: 'Lider iletişimi, marka güveni ve kurumsal itibarın nasıl güçlendirilebileceğine dair stratejik görüşler.',
    url: 'https://purple.ist/perspektif/ceo-iletisimi',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'CEO İletişimi | Purple Perspektif' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CEO'nuz Markanızın En Güçlü İletişim Kanalı Olabilir mi?",
    description: 'Lider iletişimi, marka güveni ve kurumsal itibarın nasıl güçlendirilebileceği.',
    images: ['/images/og-image.png'],
  },
};

export default function CEOArticlePage() {
  return (
    <main className="bg-[#050505] text-white">
      <Section className="pt-24">
        <div className="mx-auto flex max-w-[720px] flex-col gap-8 px-6 sm:px-8 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">CEO İletişimi</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              CEO&apos;nuz markanızın en güçlü iletişim kanalı olabilir mi?
            </h1>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-zinc-400">
              <span>4 dk okuma</span>
              <span>•</span>
              <span>6 Ağustos 2026</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 sm:p-10">
            <AssetImage
              src="/images/perspective/ceo-iletisimi.png"
              alt="CEO iletişimi blog görseli"
              width={1600}
              height={900}
              quality={80}
              loading="lazy"
              className="aspect-[5/3] w-full rounded-[1.25rem] object-cover"
            />
            <div className="mt-8 space-y-6 text-[1.05rem] leading-8 text-zinc-300">
              <p>
                İnsanlar artık şirketlerden önce liderlere güveniyor.
              </p>
              <p>
                Uzun yıllar boyunca kurumsal iletişim; şirket web siteleri, reklam kampanyaları ve basın bültenleri üzerinden yürütüldü. Bugün ise bu yaklaşım tek başına yeterli değil.
              </p>
              <p>
                Dijital dünyanın hızlanmasıyla birlikte insanlar, markaların arkasındaki kişileri daha yakından tanımak istiyor. Bir şirketin vizyonunu, değerlerini ve çalışma kültürünü anlamanın en güçlü yollarından biri, o şirketi yöneten liderlerin nasıl iletişim kurduğunu görmekten geçiyor.
              </p>
              <p>
                Özellikle LinkedIn gibi profesyonel platformlar, CEO&apos;ları yalnızca şirket yöneticisi olmaktan çıkarıp markalarının en görünür temsilcisi hâline getirdi.
              </p>
              <p>
                Bu nedenle CEO iletişimi artık kişisel bir tercih değil; kurumsal iletişim stratejisinin önemli bir parçasıdır.
              </p>

              <h2 className="pt-14 text-xl font-semibold tracking-[-0.01em] text-white">Güçlü bir CEO iletişimi neden önemlidir?</h2>
              <p>
                Bir CEO&apos;nun görünürlüğü yalnızca kendi kişisel markasını güçlendirmez. Doğru yönetildiğinde şirketin güvenilirliğini de artırır.
              </p>
              <p>
                Liderlerin düzenli ve tutarlı iletişim kurduğu şirketlerde;
              </p>
              <ul className="ml-5 list-disc space-y-2 text-zinc-300">
                <li>Kurumsal güven oluşur.</li>
                <li>İş ortakları markaya daha kolay yaklaşır.</li>
                <li>Potansiyel çalışanlar şirket kültürünü daha iyi tanır.</li>
                <li>Medya ilişkileri güçlenir.</li>
                <li>Kriz dönemlerinde şirket daha güvenilir görünür.</li>
              </ul>
              <p>
                İnsanlar logolardan çok insanlarla bağ kurar. Bu nedenle liderlerin sesi, markanın en güçlü iletişim araçlarından biri hâline gelmiştir.
              </p>

              <h2 className="pt-14 text-xl font-semibold tracking-[-0.01em] text-white">Görünür olmak ile değer üretmek aynı şey değildir.</h2>
              <p>
                Bugün birçok yönetici LinkedIn&apos;de paylaşım yapıyor. Ancak düzenli paylaşım yapmak, güçlü bir CEO iletişimi kurmak anlamına gelmiyor.
              </p>
              <p>
                Etkili lider iletişimi;
              </p>
              <ul className="ml-5 list-disc space-y-2 text-zinc-300">
                <li>şirketin vizyonunu yansıtmalı,</li>
                <li>sektöre değer katmalı,</li>
                <li>samimi ama profesyonel olmalı,</li>
                <li>kurumun iletişim stratejisiyle uyumlu ilerlemelidir.</li>
              </ul>
              <p>
                Her paylaşım bir hedefe hizmet etmeli, yalnızca görünür olmak için yapılmamalıdır.
              </p>

              <h2 className="pt-14 text-xl font-semibold tracking-[-0.01em] text-white">En sık karşılaştığımız hatalar</h2>
              <ul className="ml-5 list-disc space-y-2 text-zinc-300">
                <li>Sadece özel günlerde paylaşım yapmak.</li>
                <li>Tüm içerikleri reklam diliyle hazırlamak.</li>
                <li>Kurumsal hesap ile kişisel hesabın aynı dili kullanması.</li>
                <li>Plansız ve düzensiz içerik üretmek.</li>
                <li>Sektöre katkı sağlayan fikirler yerine yalnızca şirket haberlerini paylaşmak.</li>
              </ul>
              <p>
                Bu yaklaşım kısa vadede görünürlük sağlayabilir; ancak uzun vadede güven oluşturmaz.
              </p>

              <h2 className="pt-14 text-xl font-semibold tracking-[-0.01em] text-white">LinkedIn neden bu kadar kritik?</h2>
              <p>
                Profesyonel dünyada ilk izlenim artık çoğu zaman LinkedIn üzerinden oluşuyor.
              </p>
              <p>
                Bir yatırımcı, potansiyel çalışan veya iş ortağı, şirketle iletişime geçmeden önce CEO&apos;nun dijital varlığını inceliyor.
              </p>
              <p>
                Şu soruların cevaplarını arıyor:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-zinc-300">
                <li>Bu lider sektöre hâkim mi?</li>
                <li>Düzenli iletişim kuruyor mu?</li>
                <li>Şirketini doğru temsil ediyor mu?</li>
                <li>Güven veren bir duruş sergiliyor mu?</li>
              </ul>
              <p>
                Bu nedenle LinkedIn artık yalnızca bir sosyal ağ değil; kurumsal itibarın önemli bir parçasıdır.
              </p>

              <h2 className="pt-14 text-xl font-semibold tracking-[-0.01em] text-white">Purple&apos;ın yaklaşımı</h2>
              <p>
                Purple olarak CEO iletişimini yalnızca içerik üretimi olarak görmüyoruz.
              </p>
              <p>
                Çalışmalarımıza önce liderin hedeflerini anlamakla başlıyoruz.
              </p>
              <p>
                Ardından hedef kitleyi belirliyor, içerik stratejisini oluşturuyor, görünürlük planını hazırlıyor ve kurumsal iletişimle uyumlu bir yayın modeli geliştiriyoruz.
              </p>
              <p>
                Amacımız daha fazla paylaşım yapmak değil; güven oluşturmak, uzmanlığı görünür kılmak ve uzun vadeli bir iletişim dili oluşturmaktır.
              </p>

              <h2 className="pt-14 text-xl font-semibold tracking-[-0.01em] text-white">Sonuç</h2>
              <p>
                Kurumsal iletişim artık yalnızca şirket hesaplarından yürütülen bir faaliyet değil.
              </p>
              <p>
                Liderlerin görünürlüğü, kurumların güvenilirliği üzerinde her zamankinden daha fazla etkili oluyor.
              </p>
              <p>
                Doğru planlanan bir CEO iletişimi; markanın itibarını güçlendiren, iş ilişkilerini destekleyen ve sürdürülebilir büyümeye katkı sağlayan stratejik bir yatırımdır.
              </p>
              <p>
                Purple olarak inanıyoruz ki, güçlü markalar yalnızca iyi ürünler geliştirmez. Aynı zamanda fikir üreten, güven veren ve sektörüne yön veren liderler yetiştirir.
              </p>

              <div className="mt-10 border-l border-purple-500/60 bg-[#0d0d0d] px-6 py-5">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zinc-500">PURPLE BAKIŞ AÇISI</p>
                <p className="mt-3 text-[1.05rem] italic leading-8 text-zinc-200">
                  “Bir CEO&apos;nun en önemli görevi yalnızca şirketi yönetmek değildir. Aynı zamanda şirketin güvenilirliğini temsil etmek ve sektörüne yön veren bir iletişim dili oluşturmaktır.”
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-zinc-400">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zinc-500">YAZAR NOTU</p>
                <h3 className="mt-3 text-base font-medium text-zinc-200">Bu içerik Purple İletişim Ekibi tarafından hazırlanmıştır.</h3>
                <p className="mt-3">
                  Purple Perspektif; stratejik iletişim, kurumsal itibar, CEO iletişimi, savunma sanayi iletişimi, fuar iletişimi ve yapay zekâ destekli iletişim alanlarında düzenli olarak analiz ve görüş içerikleri yayınlar.
                </p>
              </div>

              <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] p-7">
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-white">Markanızı analiz ederek başlayın.</h3>
                <p className="mt-3 text-[1.02rem] leading-8 text-zinc-300">
                  Purple IQ ile markanızın iletişim olgunluğunu birkaç dakika içinde analiz edin. Sonuçları birlikte değerlendirerek size en uygun iletişim yol haritasını oluşturalım.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100">
                    Markanızı Analiz Edin
                  </Link>
                  <Link href="/#purple-iq" className="text-sm uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-white">
                    Purple IQ Hakkında
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-zinc-400">
            <Link href="/perspektif" className="transition-colors hover:text-white">← Tüm Yazılar</Link>
            <Link href="/perspektif/savunma-sanayi-iletisimi" className="transition-colors hover:text-white">Sonraki →</Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
