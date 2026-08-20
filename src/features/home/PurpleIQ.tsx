'use client';

import { type ChangeEvent, type FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, X, Share2 } from 'lucide-react';
import Link from 'next/link';

import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';

type OptionKey = 'not_yet' | 'partial' | 'strong';
type PackageKey = 'baslangic' | 'buyume' | 'etki';
type AreaKey = 'marka' | 'pr' | 'dijital' | 'kurumsal' | 'entegre' | 'fuar';

type Question = {
  id: `S${number}`;
  category: string;
  prompt: string;
  options: Array<{
    key: OptionKey;
    label: string;
    detail: string;
    score: number;
  }>;
};

const questions: Question[] = [
  {
    id: 'S1',
    category: 'Marka Konumlandırması',
    prompt: 'Markanızın neyi temsil ettiği ve rakiplerinden nasıl ayrıştığı ne kadar net?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Markamızın konumlandırması ve farklılaşma alanları net değil.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Bir konumlandırmamız var ancak iletişimde her zaman tutarlı değiliz.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Net ve farklılaştırıcı bir konumlandırmamız var; iletişimimizi bunun üzerine kuruyoruz.', score: 100 },
    ],
  },
  {
    id: 'S2',
    category: 'Marka Kimliği & Kreatif Farklılaşma',
    prompt: 'Markanızın görsel kimliği ve kreatif iletişimi, markanızı rakiplerinizden ne kadar farklılaştırıyor?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Kreatif iletişimimiz rakiplerden belirgin şekilde ayrışmıyor.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Zaman zaman farklılaşan çalışmalar yapıyoruz ancak bunu sürekli hale getiremiyoruz.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Özgün bir kreatif yaklaşımımız var ve iletişimimiz markamızı belirgin şekilde farklılaştırıyor.', score: 100 },
    ],
  },
  {
    id: 'S3',
    category: 'PR & Medya İlişkileri',
    prompt: 'Markanızın medyada görünürlüğünü ne kadar proaktif yönetiyorsunuz?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Medyada düzenli ve planlı bir iletişimimiz yok.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Zaman zaman haber ve basın çalışmaları yapıyoruz.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Düzenli PR planımız, medya ilişkilerimiz ve proaktif haber çalışmalarımız var.', score: 100 },
    ],
  },
  {
    id: 'S4',
    category: 'İtibar & Kriz İletişimi',
    prompt: 'Olası bir kriz veya itibar riski karşısında iletişim planınız ne kadar hazır?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Kriz iletişimi için belirlenmiş bir planımız yok.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Kriz durumunda nasıl hareket edeceğimize dair temel bir yaklaşımımız var.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Kriz senaryolarımız, mesajlarımız ve iletişim sorumluluklarımız önceden belirlenmiş.', score: 100 },
    ],
  },
  {
    id: 'S5',
    category: 'Dijital İletişim',
    prompt: 'Web siteniz ve sosyal medya kanallarınız markanızın değer önerisini ne kadar iyi yansıtıyor?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Dijital kanallarımızda tutarlı bir marka deneyimi sunamıyoruz.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Bazı kanallarımız güçlü ancak bütünsel bir dijital iletişim yapımız yok.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Tüm dijital temas noktalarımız aynı marka deneyimini ve değer önerisini yansıtıyor.', score: 100 },
    ],
  },
  {
    id: 'S6',
    category: 'İçerik Stratejisi',
    prompt: 'İçerik üretiminiz ne kadar stratejik ilerliyor?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'İçerikleri genellikle ihtiyaç oldukça üretiyoruz.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Düzenli içerik üretiyoruz ancak stratejik planlama sınırlı.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'İçeriklerimizi hedef kitle, marka ve ticari hedeflerimiz doğrultusunda planlıyoruz.', score: 100 },
    ],
  },
  {
    id: 'S7',
    category: 'İç İletişim',
    prompt: 'Çalışanlarınız şirketin hedeflerini, değerlerini ve kurumun neyi temsil ettiğini ne kadar iyi biliyor?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Düzenli bir iç iletişim yapımız bulunmuyor.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Çalışanlarımızı önemli gelişmeler hakkında bilgilendiriyoruz ancak sistematik değil.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Düzenli iç iletişim kanallarımız ve çalışan iletişim planımız var.', score: 100 },
    ],
  },
  {
    id: 'S8',
    category: 'İşveren Markası',
    prompt: 'Şirketinizin çalışanlar ve potansiyel çalışanlar açısından nasıl bir marka olduğunu ne kadar aktif yönetiyorsunuz?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'İşveren markası konusunda özel bir iletişim çalışmamız yok.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Zaman zaman işveren markası iletişimi yapıyoruz.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'İşveren markamızı stratejik olarak yönetiyor ve düzenli iletişim çalışmaları yürütüyoruz.', score: 100 },
    ],
  },
  {
    id: 'S9',
    category: 'CEO İletişimi',
    prompt: 'CEO\'nuzun kişisel iletişimini ve liderlik görünürlüğünü ne kadar stratejik yönetiyorsunuz?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'CEO\'nun dış iletişimi için belirlenmiş bir stratejimiz bulunmuyor.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'CEO zaman zaman LinkedIn, medya veya etkinliklerde görünür oluyor ancak bu iletişim sistematik değil.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'CEO\'nun LinkedIn, medya, etkinlik ve diğer dış iletişim kanallarındaki görünürlüğü stratejik olarak yönetiliyor.', score: 100 },
    ],
  },
  {
    id: 'S10',
    category: 'Fuar & Marka Deneyimi',
    prompt: 'Fuar ve etkinliklerde markanızın fiziksel deneyimini ne kadar bütünsel yönetiyorsunuz?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'Fuar iletişimimiz ağırlıklı olarak stand ve ürün sunumuyla sınırlı.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Stand tasarımı ve fuar iletişimimizi birlikte planladığımız çalışmalar oluyor.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Marka konumlandırmamızı fuar alanına uçtan uca taşıyor; stand, iletişim, ürün sunumu ve ziyaretçi deneyimini bütünsel yönetiyoruz.', score: 100 },
    ],
  },
  {
    id: 'S11',
    category: 'Entegre İletişim',
    prompt: 'PR, reklam, sosyal medya, içerik ve diğer iletişim çalışmalarınız birbirleriyle ne kadar entegre?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'İletişim kanallarımız çoğunlukla birbirinden bağımsız ilerliyor.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Bazı çalışmalarımız birbirini destekliyor ancak bütünsel bir yapı yok.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'Tüm iletişim kanallarımız aynı strateji ve marka fikri etrafında entegre ilerliyor.', score: 100 },
    ],
  },
  {
    id: 'S12',
    category: 'Ölçümleme & Büyüme',
    prompt: 'İletişim çalışmalarınızın marka ve iş sonuçlarına etkisini ne kadar ölçüyorsunuz?',
    options: [
      { key: 'not_yet', label: 'Henüz değil', detail: 'İletişim çalışmalarımızı düzenli olarak ölçmüyoruz.', score: 0 },
      { key: 'partial', label: 'Kısmen', detail: 'Temel metrikleri takip ediyoruz ancak sonuçları stratejiye düzenli olarak yansıtmıyoruz.', score: 50 },
      { key: 'strong', label: 'Güçlü', detail: 'İletişim sonuçlarını düzenli ölçüyor, iş hedefleriyle ilişkilendiriyor ve stratejimizi buna göre geliştiriyoruz.', score: 100 },
    ],
  },
];

const levelMap = [
  {
    min: 0,
    max: 39,
    label: 'Temel İletişim Yapısı',
    text: 'İletişim altyapınızın temel yapı taşlarını güçlendirme fırsatınız bulunuyor.',
  },
  {
    min: 40,
    max: 69,
    label: 'Gelişen İletişim Yapısı',
    text: 'İletişim altyapınız oluşmuş durumda. Görünürlüğünüzü, içerik gücünüzü ve iletişim kanallarınız arasındaki bütünlüğü geliştirebilirsiniz.',
  },
  {
    min: 70,
    max: 100,
    label: 'İleri İletişim Yapısı',
    text: 'Markanız güçlü bir iletişim altyapısına sahip. Bir sonraki adım, mevcut gücü daha yüksek marka etkisine ve entegre iletişime dönüştürmek.',
  },
];

const areaLabels: Record<Exclude<AreaKey, 'fuar'>, string> = {
  marka: 'Marka & Kreatif',
  pr: 'PR & İtibar',
  dijital: 'Dijital & İçerik',
  kurumsal: 'Kurumsal & Lider İletişimi',
  entegre: 'Entegre İletişim',
};

const areaInsight: Record<AreaKey, { strong: string; growth: string }> = {
  marka: {
    strong: 'Marka kimliğiniz ve kreatif anlatınız rakiplerinizden ayrışma gücü üretiyor.',
    growth: 'Konumlandırma ve kreatif farklılaşmayı daha sistematik hale getirerek etkiyi artırabilirsiniz.',
  },
  pr: {
    strong: 'PR ve itibar yönetiminde proaktif bir refleksiniz var.',
    growth: 'Medya görünürlüğünüzü daha planlı ve düzenli bir PR sistemiyle güçlendirebilirsiniz.',
  },
  dijital: {
    strong: 'Dijital temas noktalarınız ve içerik üretiminiz güçlü bir bütünlük gösteriyor.',
    growth: 'Dijital iletişim ve içerik stratejinizi daha bütünsel bir plana bağlayarak verimi yükseltebilirsiniz.',
  },
  kurumsal: {
    strong: 'Kurumsal iletişim, işveren markası ve lider görünürlüğü birlikte güçleniyor.',
    growth: 'CEO iletişimi ve kurumsal iletişim çalışmalarınızı daha stratejik bir ritme taşıyabilirsiniz.',
  },
  entegre: {
    strong: 'İletişim kanallarınız aynı strateji etrafında uyumla ilerliyor.',
    growth: 'Kanal entegrasyonunu artırarak iletişim yatırımlarınızın toplam etkisini yükseltebilirsiniz.',
  },
  fuar: {
    strong: 'Fuar ve etkinlik deneyimini marka stratejinizle güçlü biçimde bağlıyorsunuz.',
    growth: 'Fuar temas noktalarını marka deneyimi bakışıyla daha bütünsel yönetme fırsatınız bulunuyor.',
  },
};

const packageData: Record<PackageKey, {
  title: string;
  price: string;
  promise: string;
  scope: string[];
}> = {
  baslangic: {
    title: 'PURPLE BAŞLANGIÇ',
    price: '50.000 TL + KDV / ay',
    promise: 'İletişim düzeninizi kurun.',
    scope: [
      '8 sosyal medya içeriği / ay',
      '2 AI destekli kısa video / ay',
      'Haber & veri madenciliği',
      '1 basın bülteni çalışması / ay',
      'Basılı ve dijital medya servisi',
      'İçerik planlama',
      'Yayınlama',
      'Aylık toplantı',
      'Aylık raporlama',
    ],
  },
  buyume: {
    title: 'PURPLE BÜYÜME',
    price: '90.000 TL + KDV / ay',
    promise: 'Görünürlüğünüzü ve lider iletişiminizi büyütün.',
    scope: [
      '12 sosyal medya içeriği / ay',
      '4 AI destekli kısa video / ay',
      'İçerik stratejisi',
      '1 basın bülteni çalışması / ay',
      '1 TV haber çalışması / ay',
      'Proaktif medya ilişkileri',
      'Özel haber çalışmaları',
      'Basın sözcüsü belirlenmesi',
      'Konu başlıklarının çıkarılması',
      'CEO iletişim stratejisi',
      '4 CEO LinkedIn içeriği / ay',
      'Performans değerlendirmesi',
    ],
  },
  etki: {
    title: 'PURPLE ETKİ',
    price: '150.000 TL + KDV\'den başlayan',
    promise: 'Markanızın tüm iletişim temas noktalarını tek bir strateji altında yönetin.',
    scope: [
      'İletişim stratejisi',
      'Marka konumlandırmasının iletişime aktarılması',
      'Stratejik PR & medya ilişkileri',
      'Haber & veri madenciliği',
      'Basın bülteni servisi',
      'Özel haber çalışmaları',
      'Basın sözcülüğü',
      'Executive iletişim',
      'CEO / thought leadership',
      'Kreatif kampanyalar',
      'Dijital iletişim',
      'İç iletişim',
      'İşveren markası',
      'Fuar iletişimi',
      'Stand konsepti',
      'Stand tasarımı',
      'Marka deneyimi',
      'Uluslararası iletişim',
      'İtibar yönetimi',
      'Kriz iletişimi danışmanlığı',
    ],
  },
};

const projectBasedItems = [
  'Stand üretimi / inşaatı',
  'Teknik ekipman, LED, mobilya',
  'Nakliye, kurulum / söküm',
  'Baskı ve fiziksel üretimler',
  'Büyük ölçekli video prodüksiyon ve reklam filmi (TVC)',
  'Profesyonel fotoğraf / video çekimleri',
  'Medya satın alma',
  'Üçüncü taraf tedarik maliyetleri',
];

const questionOrder = questions.map((q) => q.id);

function average(values: number[]) {
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function levelByScore(score: number) {
  return levelMap.find((item) => score >= item.min && score <= item.max) ?? levelMap[1];
}

export function PurpleIQ() {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [fairParticipation, setFairParticipation] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<Partial<Record<Question['id'], number>>>({});
  const [selected, setSelected] = useState<OptionKey | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  const activeQuestionIds = useMemo(
    () => questionOrder.filter((id) => id !== 'S10' || fairParticipation !== false),
    [fairParticipation],
  );

  const currentQuestionId = started ? questionOrder[stepIndex] : null;
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  const showFairGate = started && currentQuestionId === 'S10' && fairParticipation === null;

  const answeredCount = useMemo(
    () => activeQuestionIds.filter((id) => typeof answers[id] === 'number').length,
    [activeQuestionIds, answers],
  );

  const isCompleted = started && answeredCount === activeQuestionIds.length;

  const scoreModel = useMemo(() => {
    const get = (id: Question['id']) => answers[id] ?? 0;
    const purpleIq = average(activeQuestionIds.map((id) => get(id)));
    const areaScores: Record<AreaKey, number> = {
      marka: average([get('S1'), get('S2')]),
      pr: average([get('S3'), get('S4')]),
      dijital: average([get('S5'), get('S6')]),
      kurumsal: average([get('S7'), get('S8'), get('S9')]),
      entegre: fairParticipation === false ? average([get('S11'), get('S12')]) : average([get('S10'), get('S11'), get('S12')]),
      fuar: get('S10'),
    };

    const level = levelByScore(purpleIq);
    const strongAreas = (Object.keys(areaLabels) as Array<Exclude<AreaKey, 'fuar'>>)
      .map((key) => ({ key, label: areaLabels[key], score: areaScores[key] }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);

    const growthAreas = (Object.keys(areaLabels) as Array<Exclude<AreaKey, 'fuar'>>)
      .map((key) => ({ key, label: areaLabels[key], score: areaScores[key] }))
      .filter((item) => item.score <= 50)
      .sort((a, b) => a.score - b.score)
      .slice(0, 2);

    const etkiCriteriaFields: number[] = [
      areaScores.marka,
      areaScores.pr,
      areaScores.kurumsal,
      areaScores.entegre,
    ];
    if (fairParticipation) etkiCriteriaFields.push(areaScores.fuar);
    const etkiCriteriaCount = etkiCriteriaFields.filter((score) => score >= 70).length;
    const qualifiesForEtki = purpleIq >= 70 && etkiCriteriaCount >= 2;

    let recommendedPackage: PackageKey = 'baslangic';
    let alternativePackage: PackageKey | null = null;

    if (purpleIq <= 39) {
      recommendedPackage = 'baslangic';
    } else if (purpleIq <= 69) {
      recommendedPackage = 'buyume';
    } else if (qualifiesForEtki) {
      recommendedPackage = 'etki';
    } else {
      recommendedPackage = 'buyume';
      alternativePackage = 'etki';
    }

    return {
      purpleIq,
      areaScores,
      level,
      strongAreas,
      growthAreas,
      recommendedPackage,
      alternativePackage,
      qualifiesForEtki,
    };
  }, [activeQuestionIds, answers, fairParticipation]);

  const progressCurrent = currentQuestionId
    ? Math.max(1, activeQuestionIds.indexOf(currentQuestionId) + 1)
    : activeQuestionIds.length;

  const advanceStep = (baseIndex: number, fair: boolean | null) => {
    let next = baseIndex + 1;
    while (next < questionOrder.length) {
      const id = questionOrder[next];
      if (id === 'S10' && fair === false) {
        next += 1;
        continue;
      }
      break;
    }
    setStepIndex(next);
  };

  const handleAnswer = (option: Question['options'][number]) => {
    if (!currentQuestion) return;
    setSelected(option.key);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.score }));
    setTimeout(() => {
      setSelected(null);
      advanceStep(stepIndex, fairParticipation);
    }, 220);
  };

  const handleFairGate = (value: boolean) => {
    setFairParticipation(value);
    if (!value) {
      advanceStep(stepIndex, false);
    }
  };

  const resetTest = useCallback(() => {
    setStarted(false);
    setStepIndex(0);
    setFairParticipation(null);
    setAnswers({});
    setSelected(null);
    setContactOpen(false);
    setShareStatus('idle');
  }, []);

  useEffect(() => {
    const resetOnLeavePurpleIq = () => {
      if (window.location.hash !== '#purple-iq') {
        resetTest();
      }
    };

    const resetOnHeaderNavigation = () => {
      resetTest();
    };

    window.addEventListener('hashchange', resetOnLeavePurpleIq);
    window.addEventListener('popstate', resetOnLeavePurpleIq);
    window.addEventListener('purpleiq:reset-test', resetOnHeaderNavigation);

    return () => {
      window.removeEventListener('hashchange', resetOnLeavePurpleIq);
      window.removeEventListener('popstate', resetOnLeavePurpleIq);
      window.removeEventListener('purpleiq:reset-test', resetOnHeaderNavigation);
    };
  }, [resetTest]);

  const shareText = `PURPLE IQ\n${scoreModel.purpleIq} / 100\n${scoreModel.level.label}\npurple.ist / Purple IQ`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'PURPLE IQ Sonucum', text: shareText, url: 'https://purple.ist/#purple-iq' });
      } else {
        await navigator.clipboard.writeText(shareText);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 1800);
      }
    } catch {
      // Kullanıcı paylaşımı iptal ederse ek işlem yapma.
    }
  };

  return (
    <Section id="purple-iq" className="mt-8 border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        {!started && (
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">PURPLE IQ</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
                Markanızı ölçmeden büyütmeyiz.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Purple IQ, markanızın iletişim olgunluğunu analiz ederek güçlü alanlarınızı, gelişim fırsatlarınızı ve size en uygun çalışma modelini gösteren interaktif bir değerlendirme testidir.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Purple IQ Testini Başlat
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="/#services" className="inline-flex items-center text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                  Nasıl çalışıyor?
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[#a855f7]" />
                  12 Soru
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[#a855f7]" />
                  3 Dakika
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[#a855f7]" />
                  Formsuz Sonuç
                </span>
              </div>
            </motion.div>

            <motion.div
              {...cardHover}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Purple IQ</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">İletişim Olgunluğu</h3>
                </div>
                <div className="text-4xl font-semibold tracking-[-0.03em] text-white">
                  68<span className="ml-1 text-base text-zinc-500">/100</span>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  { label: 'Marka & Kreatif', score: 82 },
                  { label: 'PR & İtibar', score: 64 },
                  { label: 'Dijital & İçerik', score: 73 },
                  { label: 'Kurumsal & Lider İletişimi', score: 58 },
                  { label: 'Entegre İletişim', score: 66 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm text-zinc-400">
                      <span>{item.label}</span>
                      <span className="text-zinc-300">{item.score}/100</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-[#a855f7]" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a855f7]/15 text-[#a855f7]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Purple IQ Ön Analizi</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Ücretsiz</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">12 Soru</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-zinc-500">3 Dakika</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {started && !isCompleted && currentQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mx-auto w-full max-w-3xl rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{progressCurrent} / {activeQuestionIds.length}</p>
              <button
                type="button"
                onClick={resetTest}
                className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Testi Sıfırla
              </button>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-[#a855f7] transition-all duration-300" style={{ width: `${(answeredCount / activeQuestionIds.length) * 100}%` }} />
            </div>

            {showFairGate ? (
              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Fuar & Etkinlik Uygunluğu</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">
                  Markanız sektörel fuar veya etkinliklere katılıyor mu?
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => handleFairGate(true)}
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-5 text-left transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    <p className="text-base font-semibold text-white">Evet</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFairGate(false)}
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-5 text-left transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    <p className="text-base font-semibold text-white">Hayır</p>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-8">
                  <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">{currentQuestion.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">{currentQuestion.prompt}</h3>
                </div>

                <div className="mt-6 space-y-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => handleAnswer(option)}
                      className={`w-full rounded-2xl border px-5 py-5 text-left transition-all ${selected === option.key ? 'border-[#a855f7]/70 bg-[#a855f7]/12' : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10'}`}
                    >
                      <p className="text-base font-semibold text-white">{option.label}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{option.detail}</p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}

        {started && isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">PURPLE IQ</p>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">{scoreModel.purpleIq} <span className="text-2xl text-zinc-500">/ 100</span></p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{scoreModel.level.label}</h2>
                </div>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Share2 className="h-4 w-4" />
                  {shareStatus === 'copied' ? 'Kopyalandı' : 'Sonucunu Paylaş'}
                </button>
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-400">{scoreModel.level.text}</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">İletişim Profiliniz</h3>
              <div className="mt-6 space-y-5">
                {(Object.keys(areaLabels) as Array<Exclude<AreaKey, 'fuar'>>).map((key) => {
                  const score = scoreModel.areaScores[key];
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between text-sm text-zinc-400">
                        <span>{areaLabels[key]}</span>
                        <span className="text-zinc-300">{score}/100</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className="h-2 rounded-full bg-[#a855f7]" style={{ width: `${score}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
                <h3 className="text-lg font-semibold text-white">Güçlü Alanlarınız</h3>
                <div className="mt-4 space-y-4">
                  {scoreModel.strongAreas.map((area) => (
                    <div key={area.key} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">{area.label} — {area.score}/100</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{areaInsight[area.key].strong}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
                <h3 className="text-lg font-semibold text-white">Gelişim Fırsatlarınız</h3>
                <div className="mt-4 space-y-4">
                  {scoreModel.growthAreas.length > 0 ? scoreModel.growthAreas.map((area) => (
                    <div key={area.key} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">{area.label} — {area.score}/100</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{areaInsight[area.key].growth}</p>
                    </div>
                  )) : (
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm leading-6 text-zinc-400">İletişim alanlarınız dengeli ilerliyor. Bir sonraki adım, mevcut güçlü alanları entegre etkiye dönüştürmek.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div id="purple-iq-package-detail" className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Size Önerimiz</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white">{packageData[scoreModel.recommendedPackage].title}</h3>
              <p className="mt-2 text-base text-zinc-300">{packageData[scoreModel.recommendedPackage].promise}</p>
              {!scoreModel.qualifiesForEtki && scoreModel.alternativePackage === 'etki' && (
                <p className="mt-3 text-sm text-zinc-400">Purple IQ skorunuz güçlü bir seviyede. Entegre iletişimdeki alanlarınızı güçlendirdiğinizde Purple Etki modeline geçiş potansiyeliniz de bulunuyor.</p>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Purple ile Görüşelim
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href={`/buyume-plani/${scoreModel.recommendedPackage}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/10"
                >
                  Paketi İncele
                </Link>
                <button
                  type="button"
                  onClick={resetTest}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  Testi Yeniden Başlat
                </button>
              </div>
            </div>

            <div id="purple-iq-packages" className="grid gap-5 lg:grid-cols-3">
              {(Object.keys(packageData) as PackageKey[]).map((key) => {
                const pack = packageData[key];
                const isRecommended = key === scoreModel.recommendedPackage;
                return (
                  <div
                    key={key}
                    id={`purple-iq-package-${key}`}
                    className={`rounded-[1.5rem] border p-6 ${isRecommended ? 'border-[#a855f7]/50 bg-[#a855f7]/10' : 'border-white/10 bg-[#0d0d0d]'}`}
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{isRecommended ? 'Önerilen Model' : 'Model'}</p>
                    <h4 className="mt-3 text-xl font-semibold text-white">{pack.title}</h4>
                    <p className="mt-2 text-sm text-zinc-300">{pack.price}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{pack.promise}</p>
                    <div className="mt-4 space-y-2">
                      {pack.scope.map((item) => (
                        <p key={item} className="text-sm leading-6 text-zinc-300">• {item}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
              <h4 className="text-lg font-semibold text-white">Paket Dışı / Proje Bazlı Hizmetler</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-400">Strateji, kreatif ve yönetim paket kapsamında ilerler. Fiziksel üretim, üçüncü taraf maliyetleri ve büyük prodüksiyonlar ayrıca fiyatlandırılır.</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {projectBasedItems.map((item) => (
                  <p key={item} className="text-sm leading-6 text-zinc-300">• {item}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {contactOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4"
              onClick={() => setContactOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Purple ile Görüşelim</p>
                    <h4 className="mt-2 text-2xl font-semibold text-white">İletişim Formu</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setContactOpen(false)}
                    className="rounded-full border border-white/15 bg-white/5 p-2 text-zinc-300 transition-colors hover:bg-white/10"
                    aria-label="Kapat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-400">Sonucunuzu görmek için bu form zorunlu değildir. İsterseniz bilgilerinizi paylaşarak ekibimizle görüşme planlayabilirsiniz.</p>

                <ContactLeadForm
                  iqScore={scoreModel.purpleIq}
                  recommendedPackage={packageData[scoreModel.recommendedPackage].title}
                  areaScores={scoreModel.areaScores}
                  growthAreas={scoreModel.growthAreas.map((item) => item.label)}
                />

                <p className="mt-4 text-xs leading-6 text-zinc-500">
                  Not: Bu projede CRM/backend lead entegrasyonu tanımlı değil. Gönderim çıktısı e-posta taslağına hazırlanır.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ContactLeadForm({
  iqScore,
  recommendedPackage,
  areaScores,
  growthAreas,
}: {
  iqScore: number;
  recommendedPackage: string;
  areaScores: Record<AreaKey, number>;
  growthAreas: string[];
}) {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    title: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const date = new Date().toISOString();
    const body = [
      `Ad Soyad: ${form.fullName}`,
      `Şirket: ${form.company}`,
      `E-posta: ${form.email}`,
      `Telefon: ${form.phone}`,
      `Görev / Ünvan: ${form.title}`,
      '',
      `Purple IQ: ${iqScore}`,
      `Önerilen Paket: ${recommendedPackage}`,
      `Marka & Kreatif: ${areaScores.marka}`,
      `PR & İtibar: ${areaScores.pr}`,
      `Dijital & İçerik: ${areaScores.dijital}`,
      `Kurumsal & Lider İletişimi: ${areaScores.kurumsal}`,
      `Entegre İletişim: ${areaScores.entegre}`,
      `Gelişim Alanları: ${growthAreas.join(', ') || 'Yok'}`,
      `Test Tarihi: ${date}`,
    ].join('\n');

    window.location.href = `mailto:hello@purple.ist?subject=${encodeURIComponent('Purple IQ Görüşme Talebi')}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-400">
          Ad Soyad
          <input
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={onChange}
            className="mt-2 w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
          />
        </label>
        <label className="text-sm text-zinc-400">
          Şirket
          <input
            name="company"
            type="text"
            value={form.company}
            onChange={onChange}
            className="mt-2 w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-400">
          E-posta
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            className="mt-2 w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
          />
        </label>
        <label className="text-sm text-zinc-400">
          Telefon
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={onChange}
            className="mt-2 w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
          />
        </label>
      </div>

      <label className="text-sm text-zinc-400">
        Görev / Ünvan
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={onChange}
          className="mt-2 w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
      >
        Gönder
        <ArrowRight className="h-4 w-4" />
      </button>

      {submitted && (
        <p className="text-sm text-zinc-400">E-posta taslağınız hazırlandı. Gönderdikten sonra ekibimiz sizinle iletişime geçecektir.</p>
      )}
    </form>
  );
}
