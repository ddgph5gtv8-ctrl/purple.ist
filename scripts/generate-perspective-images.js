const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const WIDTH = 1600;
const HEIGHT = 1000;
const OUT_DIR = path.join(process.cwd(), 'public/images/perspective');

fs.mkdirSync(OUT_DIR, { recursive: true });

const palette = {
  bg: '#09090c',
  panel: '#101116',
  panel2: '#171923',
  panel3: '#1c1d27',
  line: '#5d6075',
  soft: '#d9dae8',
  violet: '#8d72ff',
  violet2: '#6e59d6',
  softViolet: '#b8aaff',
  white: '#f0f1f8',
  muted: '#9ca0b4',
};

async function render(svg, file) {
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(OUT_DIR, file));
}

const prSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000' viewBox='0 0 1600 1000'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='${palette.bg}'/>
      <stop offset='40%' stop-color='#0d0d12'/>
      <stop offset='100%' stop-color='#12131a'/>
    </linearGradient>
    <linearGradient id='windowGlow' x1='0' x2='0' y1='0' y2='1'>
      <stop offset='0%' stop-color='#f1f2ff' stop-opacity='0.20'/>
      <stop offset='100%' stop-color='#f1f2ff' stop-opacity='0.02'/>
    </linearGradient>
    <linearGradient id='desk' x1='0' x2='1'>
      <stop offset='0%' stop-color='#1a1c24'/>
      <stop offset='100%' stop-color='#111319'/>
    </linearGradient>
    <linearGradient id='glass' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#2d2d38' stop-opacity='0.8'/>
      <stop offset='100%' stop-color='#1b1d27' stop-opacity='0.9'/>
    </linearGradient>
    <radialGradient id='violetBloom' cx='72%' cy='18%' r='42%'>
      <stop offset='0%' stop-color='${palette.violet}' stop-opacity='0.28'/>
      <stop offset='100%' stop-color='${palette.violet}' stop-opacity='0'/>
    </radialGradient>
    <filter id='blur' x='-20%' y='-20%' width='140%' height='140%'>
      <feGaussianBlur stdDeviation='18'/>
    </filter>
  </defs>

  <rect width='1600' height='1000' fill='url(#bg)'/>
  <rect width='1600' height='1000' fill='url(#violetBloom)'/>

  <g opacity='0.18'>
    <path d='M0 720 L220 610 L380 640 L560 560 L720 610 L950 495 L1120 560 L1350 470 L1600 540 L1600 1000 L0 1000 Z' fill='#191b27'/>
    <path d='M0 770 L180 710 L370 730 L510 660 L680 700 L850 630 L1110 700 L1260 650 L1600 730 L1600 1000 L0 1000 Z' fill='#0d0e13'/>
  </g>

  <g>
    <rect x='170' y='105' width='1260' height='460' rx='18' fill='url(#windowGlow)' stroke='rgba(255,255,255,0.08)'/>
    <rect x='200' y='130' width='1200' height='410' rx='10' fill='#101118' stroke='rgba(255,255,255,0.12)'/>
    <g opacity='0.75'>
      <path d='M265 475 L415 280 L548 476 Z' fill='#202334'/>
      <path d='M455 475 L620 220 L760 475 Z' fill='#1a1d2a'/>
      <path d='M735 475 L895 245 L1050 475 Z' fill='#1d1f2d'/>
      <path d='M1020 475 L1180 300 L1305 475 Z' fill='#181b27'/>
    </g>
    <g opacity='0.8'>
      <path d='M250 170 L1270 170' stroke='rgba(255,255,255,0.10)'/>
      <path d='M250 210 L1270 210' stroke='rgba(255,255,255,0.08)'/>
      <path d='M250 260 L1270 260' stroke='rgba(255,255,255,0.08)'/>
      <path d='M250 310 L1270 310' stroke='rgba(255,255,255,0.08)'/>
      <path d='M250 360 L1270 360' stroke='rgba(255,255,255,0.08)'/>
    </g>
  </g>

  <g>
    <rect x='110' y='585' width='1380' height='315' rx='18' fill='url(#desk)'/>
    <rect x='155' y='622' width='1290' height='210' rx='14' fill='#191b25' stroke='rgba(255,255,255,0.08)'/>

    <g>
      <rect x='220' y='660' width='360' height='140' rx='12' fill='url(#glass)' stroke='rgba(255,255,255,0.10)'/>
      <rect x='245' y='685' width='310' height='92' rx='8' fill='#0d0f15'/>
      <path d='M252 706 H549' stroke='rgba(255,255,255,0.08)'/>
      <path d='M252 725 H549' stroke='rgba(255,255,255,0.08)'/>
      <path d='M252 744 H549' stroke='rgba(255,255,255,0.08)'/>
      <path d='M252 763 H480' stroke='rgba(255,255,255,0.08)'/>
      <path d='M310 687 L420 785' stroke='${palette.violet}' stroke-opacity='0.75' stroke-width='3'/>
      <path d='M390 685 L475 785' stroke='${palette.softViolet}' stroke-opacity='0.8' stroke-width='3'/>
      <circle cx='475' cy='720' r='7' fill='${palette.violet}' fill-opacity='0.75'/>
    </g>

    <g>
      <rect x='630' y='640' width='400' height='170' rx='12' fill='url(#glass)' stroke='rgba(255,255,255,0.10)'/>
      <rect x='655' y='665' width='350' height='118' rx='8' fill='#11141b'/>
      <path d='M670 770 L970 770' stroke='rgba(255,255,255,0.10)'/>
      <path d='M670 690 L965 690' stroke='rgba(255,255,255,0.10)'/>
      <path d='M670 710 L965 710' stroke='rgba(255,255,255,0.08)'/>
      <path d='M670 730 L965 730' stroke='rgba(255,255,255,0.08)'/>
      <path d='M735 680 L860 760' stroke='${palette.violet}' stroke-width='3' stroke-opacity='0.82'/>
      <path d='M770 680 L930 756' stroke='${palette.softViolet}' stroke-width='2.5' stroke-opacity='0.7'/>
      <circle cx='875' cy='725' r='8' fill='${palette.violet}' fill-opacity='0.85'/>
      <circle cx='920' cy='690' r='7' fill='${palette.white}' fill-opacity='0.62'/>
    </g>

    <g>
      <rect x='1080' y='655' width='295' height='155' rx='12' fill='url(#glass)' stroke='rgba(255,255,255,0.10)'/>
      <rect x='1103' y='680' width='250' height='105' rx='8' fill='#0d1016'/>
      <path d='M1116 705 H1335' stroke='rgba(255,255,255,0.08)'/>
      <path d='M1116 726 H1335' stroke='rgba(255,255,255,0.08)'/>
      <path d='M1116 747 H1335' stroke='rgba(255,255,255,0.08)'/>
      <path d='M1165 700 L1260 770' stroke='${palette.violet}' stroke-width='3' stroke-opacity='0.7'/>
      <path d='M1208 700 L1310 770' stroke='${palette.softViolet}' stroke-width='2.6' stroke-opacity='0.7'/>
    </g>

    <g opacity='0.25'>
      <path d='M160 760 L1440 760' stroke='rgba(255,255,255,0.18)'/>
      <path d='M180 790 L1420 790' stroke='rgba(255,255,255,0.12)'/>
      <path d='M220 820 L1380 820' stroke='rgba(255,255,255,0.10)'/>
    </g>
  </g>

  <g opacity='0.55'>
    <path d='M160 890 L190 860 L230 900 L270 860 L306 900 L350 862 L392 900 L438 88' fill='none' stroke='rgba(210,210,240,0.14)'/>
    <path d='M330 890 L360 860 L400 900 L440 860 L476 900 L520 862 L562 900 L610 86' fill='none' stroke='rgba(210,210,240,0.14)'/>
    <path d='M560 890 L590 860 L630 900 L670 860 L708 900 L752 862 L794 900 L840 86' fill='none' stroke='rgba(210,210,240,0.12)'/>
  </g>
</svg>
`;

const creativeSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000' viewBox='0 0 1600 1000'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#09090b'/>
      <stop offset='55%' stop-color='#101117'/>
      <stop offset='100%' stop-color='#171821'/>
    </linearGradient>
    <linearGradient id='paper' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#f5f6fb'/>
      <stop offset='100%' stop-color='#dfe1ef'/>
    </linearGradient>
    <linearGradient id='purpleSheet' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#8b78ff'/>
      <stop offset='100%' stop-color='#5f4dcf'/>
    </linearGradient>
    <radialGradient id='light' cx='50%' cy='12%' r='48%'>
      <stop offset='0%' stop-color='#f5f5ff' stop-opacity='0.30'/>
      <stop offset='100%' stop-color='#f5f5ff' stop-opacity='0'/>
    </radialGradient>
    <filter id='softShadow' x='-20%' y='-20%' width='140%' height='160%'>
      <feDropShadow dx='0' dy='16' stdDeviation='20' flood-color='#000' flood-opacity='0.42'/>
    </filter>
  </defs>

  <rect width='1600' height='1000' fill='url(#bg)'/>
  <rect width='1600' height='1000' fill='url(#light)'/>

  <g opacity='0.20'>
    <path d='M0 745 L180 710 L340 730 L510 660 L700 710 L920 615 L1170 710 L1600 650 L1600 1000 L0 1000 Z' fill='#1a1b23'/>
  </g>

  <g filter='url(#softShadow)'>
    <rect x='180' y='200' width='340' height='250' rx='12' fill='url(#paper)' transform='rotate(-8 350 325)'/>
    <rect x='280' y='180' width='358' height='270' rx='12' fill='#f1f1fb' transform='rotate(8 459 315)'/>
    <rect x='560' y='248' width='440' height='290' rx='14' fill='#171923' transform='rotate(-3 780 393)'/>
    <rect x='1040' y='178' width='290' height='250' rx='12' fill='url(#purpleSheet)' transform='rotate(8 1185 303)'/>
  </g>

  <g opacity='0.9'>
    <rect x='210' y='225' width='250' height='160' rx='8' fill='#f5f6fb'/>
    <rect x='300' y='208' width='260' height='170' rx='8' fill='#eff1f9'/>
    <rect x='620' y='300' width='330' height='180' rx='10' fill='#1a1c26'/>
    <rect x='1080' y='220' width='210' height='150' rx='10' fill='#7d68ff' fill-opacity='0.8'/>
  </g>

  <g opacity='0.7'>
    <rect x='250' y='250' width='160' height='8' fill='#d4d7e6'/>
    <rect x='250' y='275' width='120' height='8' fill='#d4d7e6'/>
    <rect x='250' y='300' width='180' height='8' fill='#d4d7e6'/>
    <rect x='250' y='330' width='150' height='8' fill='#d4d7e6'/>

    <rect x='660' y='336' width='156' height='8' fill='#f0f1ff' fill-opacity='0.7'/>
    <rect x='660' y='360' width='205' height='8' fill='#f0f1ff' fill-opacity='0.45'/>
    <rect x='660' y='384' width='180' height='8' fill='#f0f1ff' fill-opacity='0.35'/>
    <rect x='660' y='412' width='220' height='8' fill='#f0f1ff' fill-opacity='0.3'/>

    <rect x='1115' y='245' width='130' height='8' fill='#f2f3ff' fill-opacity='0.8'/>
    <rect x='1115' y='270' width='95' height='8' fill='#f2f3ff' fill-opacity='0.75'/>
    <rect x='1115' y='295' width='140' height='8' fill='#f2f3ff' fill-opacity='0.7'/>
 
    <path d='M1180 328 L1280 280' stroke='#f2f3ff' stroke-opacity='0.8' stroke-width='2.5'/>
    <path d='M1180 355 L1295 305' stroke='#f2f3ff' stroke-opacity='0.72' stroke-width='2.5'/>
  </g>

  <g opacity='0.25'>
    <path d='M0 770 L1600 770' stroke='#ececf8' stroke-opacity='0.10'/>
    <path d='M0 810 L1600 810' stroke='#ececf8' stroke-opacity='0.08'/>
  </g>

  <g>
    <rect x='160' y='620' width='1280' height='280' rx='22' fill='#101117'/>
    <rect x='190' y='655' width='300' height='205' rx='16' fill='#141821'/>
    <rect x='530' y='655' width='300' height='205' rx='16' fill='#181c26'/>
    <rect x='870' y='655' width='300' height='205' rx='16' fill='#141821'/>
    <rect x='1210' y='655' width='180' height='205' rx='16' fill='#181c26'/>

    <g opacity='0.9'>
      <circle cx='325' cy='750' r='58' fill='#8b78ff' fill-opacity='0.42'/>
      <circle cx='680' cy='760' r='60' fill='#f0f1fa' fill-opacity='0.12'/>
      <circle cx='1020' cy='760' r='60' fill='#8b78ff' fill-opacity='0.26'/>
      <circle cx='1320' cy='760' r='50' fill='#f0f1fa' fill-opacity='0.08'/>
    </g>

    <g opacity='0.55'>
      <path d='M230 780 L420 780 M230 805 L420 805 M230 830 L420 830' stroke='rgba(255,255,255,0.12)'/>
      <path d='M570 780 L780 780 M570 805 L780 805 M570 830 L780 830' stroke='rgba(255,255,255,0.12)'/>
      <path d='M910 780 L1110 780 M910 805 L1110 805 M910 830 L1110 830' stroke='rgba(255,255,255,0.12)'/>
    </g>
  </g>
</svg>
`;

const fairSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000' viewBox='0 0 1600 1000'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#09090b'/>
      <stop offset='45%' stop-color='#0f1015'/>
      <stop offset='100%' stop-color='#17191e'/>
    </linearGradient>
    <linearGradient id='glass' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#20232d'/>
      <stop offset='100%' stop-color='#11141b'/>
    </linearGradient>
    <linearGradient id='floor' x1='0' x2='1'>
      <stop offset='0%' stop-color='#161922'/>
      <stop offset='100%' stop-color='#0d0f13'/>
    </linearGradient>
    <radialGradient id='mood' cx='55%' cy='25%' r='38%'>
      <stop offset='0%' stop-color='#8d72ff' stop-opacity='0.16'/>
      <stop offset='100%' stop-color='#8d72ff' stop-opacity='0'/>
    </radialGradient>
    <filter id='shadow' x='-20%' y='-20%' width='140%' height='170%'>
      <feDropShadow dx='0' dy='20' stdDeviation='20' flood-color='#000' flood-opacity='0.45'/>
    </filter>
  </defs>

  <rect width='1600' height='1000' fill='url(#bg)'/>
  <rect width='1600' height='1000' fill='url(#mood)'/>

  <g opacity='0.16'>
    <path d='M0 735 L170 705 L365 725 L560 650 L760 710 L980 630 L1160 700 L1350 650 L1600 710 L1600 1000 L0 1000 Z' fill='#191b25'/>
  </g>

  <g filter='url(#shadow)'>
    <polygon points='180,760 820,480 1420,760 780,1030' fill='#12151d'/>
    <polygon points='300,730 820,500 1320,730 790,960' fill='#171b22'/>
    <polygon points='460,695 820,540 1170,690 790,855' fill='#1f232d'/>
  </g>

  <g>
    <rect x='100' y='430' width='500' height='195' rx='16' fill='url(#glass)' stroke='rgba(255,255,255,0.09)'/>
    <rect x='850' y='390' width='620' height='245' rx='18' fill='url(#glass)' stroke='rgba(255,255,255,0.09)'/>
    <rect x='960' y='440' width='285' height='132' rx='12' fill='#0f1319'/>
    <rect x='1305' y='430' width='125' height='140' rx='12' fill='#151a22'/>
  </g>

  <g opacity='0.6'>
    <path d='M530 780 L750 640 L930 780 L710 920 Z' fill='#1f2530'/>
    <path d='M940 780 L1120 650 L1260 780 L1080 920 Z' fill='#202835'/>
  </g>

  <g opacity='0.75'>
    <path d='M155 495 H560' stroke='rgba(255,255,255,0.12)'/>
    <path d='M155 530 H560' stroke='rgba(255,255,255,0.12)'/>
    <path d='M155 565 H560' stroke='rgba(255,255,255,0.12)'/>
    <path d='M890 470 H1430' stroke='rgba(255,255,255,0.12)'/>
    <path d='M890 510 H1430' stroke='rgba(255,255,255,0.12)'/>
    <path d='M890 550 H1430' stroke='rgba(255,255,255,0.12)'/>
  </g>

  <g opacity='0.7'>
    <path d='M550 785 C660 725 704 730 780 770' stroke='${palette.violet}' stroke-width='4' stroke-opacity='0.9' fill='none'/>
    <path d='M920 780 C1010 720 1090 720 1170 770' stroke='${palette.softViolet}' stroke-width='4' stroke-opacity='0.8' fill='none'/>
  </g>

  <g opacity='0.30'>
    <circle cx='620' cy='630' r='52' fill='${palette.violet}'/>
    <circle cx='1010' cy='560' r='46' fill='${palette.violet}' fill-opacity='0.65'/>
    <circle cx='1230' cy='590' r='38' fill='#f5f5ff' fill-opacity='0.22'/>
  </g>

  <g>
    <rect x='0' y='780' width='1600' height='220' fill='url(#floor)'/>
    <g opacity='0.18'>
      <path d='M135 860 L290 860 M410 860 L570 860 M690 860 L850 860 M980 860 L1145 860 M1260 860 L1425 860' stroke='rgba(255,255,255,0.16)'/>
      <path d='M150 900 L290 900 M420 900 L570 900 M700 900 L850 900 M980 900 L1150 900 M1270 900 L1435 900' stroke='rgba(255,255,255,0.10)'/>
    </g>
  </g>

  <g opacity='0.30'>
    <ellipse cx='780' cy='168' rx='320' ry='90' fill='#f4f4fd' fill-opacity='0.06'/>
    <ellipse cx='780' cy='198' rx='260' ry='70' fill='${palette.violet}' fill-opacity='0.10'/>
  </g>
</svg>
`;

(async () => {
  await render(prSvg, 'pr-geo.jpg');
  await render(creativeSvg, 'kreatif-marka.jpg');
  await render(fairSvg, 'fuar-marka-deneyimi.jpg');
  console.log('Generated new programmatic perspective covers.');
})();
