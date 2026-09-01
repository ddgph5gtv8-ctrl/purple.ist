import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

const data: ServicePageData = {
  hero: {
    badge: 'YARATICI İÇERİK',
    title: 'İçerik yalnızca yazmaktan öteye geçer; anlam üretir.',
    tagline: 'Marka anlatısını doğru dil, doğru format ve doğru stratejiyle şekillendiriyoruz. İçerik, yalnızca görünürlük değil, güven ve dönüşüm yaratmalıdır.',
    cta: 'İletişim Kurulumu',
  },
  about: {
    headline: 'Yaratıcı içerik neden stratejik bir yatırım alanıdır?',
    body: 'Günümüzde içerik, ürün ya da hizmetin kendisinden daha fazla değer üretebilir. Ancak bu değer yalnızca düzenli yayın yapmakla değil, doğru mesaj, doğru biçim ve doğru dağıtım stratejisiyle oluşur. Purple olarak yaratıcı içerik üretimini, iletişim stratejisiyle bütünleştirir; markanızın sesini, değer önerisini ve algısını güçlendiren içerik sistemleri kurarız.',
  },
  approach: [
    {
      title: 'İçerik Stratejisi ve Hedef Kitle Haritası',
      description: 'Markanın ne anlatması gerektiğini, hangi kitleye ve hangi kanalda ulaşması gerektiğini belirliyoruz. İçerik, yalnızca üretim değil, hedefe yönelik bir iletişim kararları setidir.',
    },
    {
      title: 'Mesaj ve Ton Mimarisi',
      description: 'Marka sesini, değer önerisini ve iletişim tarzını tutarlı şekilde kuruyoruz. Böylece her içerik, aynı fikir bütünlüğü içinde çalışır.',
    },
    {
      title: 'Çoklu Format Üretim',
      description: 'Reel, blog, kısa video, marka anlatımı ve sosyal içerik üretimini tek akışta yönetiyoruz. Aynı mesaj, farklı formatlarda güçlenir.',
    },
    {
      title: 'Yayım ve Performans Optimizasyonu',
      description: 'İçeriklerin etki düzeyini takip eder, hangilerinin daha güçlü tepki aldığını analiz eder ve stratejiyi buna göre iyileştiririz.',
    },
  ],
  capabilities: [
    'İçerik Stratejisi',
    'Yaratıcı İçerik Üretimi',
    'Sosyal Medya İçerik Akışı',
    'Reel ve Video Kısa Form',
    'Marka Anlatısı',
    'Duygusal ve Stratejik Mesaj Tasarımı',
    'İçerik Performans İzleme',
    'Kanal Uyumluluğu',
  ],
  whyPurple: [
    {
      title: 'Strateji ile üretim birlikte yürür',
      description: 'İçerik üretimini tek başına yaratıcı bir eylem olarak değil, marka hedefleriyle bağlayan bir sistem olarak ele alıyoruz.',
    },
    {
      title: 'Ses her kanalda tutarlı kalır',
      description: 'Marka anlatımı, farklı platformlarda da aynı güven ve vizyonu taşımalı; bunun için içerik sistemini tutarlı kuruyoruz.',
    },
    {
      title: 'Yaratıcılık veriye dayanır',
      description: 'Hangi içerik türünün daha güçlü tepkiler verdiğini izleyerek, iletişimi hem yaratıcılık hem de etki açısından optimize ediyoruz.',
    },
    {
      title: 'Marka büyümesi için içerik ekosistemi kurarız',
      description: 'Tek bir içerikten öte, içerik üretimini sürdürülebilir bir iletişim altyapısına dönüştürüyoruz.',
    },
  ],
};

export default function YaraticiIcerikPage() {
  return <ServicePageTemplate data={data} />;
}
