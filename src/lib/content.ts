export type Lang = "fr" | "ar" | "en";
export const LANGS: Lang[] = ["fr", "ar", "en"];

export const COMPANY = {
  name: "MASHARIQ Energy",
  street: "94 Neopark",
  city: "Monastir",
  postal: "5000",
  country: "TN",
  phone: "+216 21 054 054",
  phoneHref: "tel:+21621054054",
};

type Item = { t: string; d: string };
export type Dict = {
  skip: string;
  nav: { about: string; solutions: string; method: string; faq: string; contact: string; quote: string; menu: string; close: string };
  hero: { kicker: string; h1a: string; h1b: string; h1em: string; sub: string; cta: string; cta2: string; alt: string };
  intro: { kicker: string; h2a: string; h2em: string; sub: string; cta: string; tags: string[] };
  conviction: { kicker: string; text: string; em1: string; em2: string; alt: string };
  about: { kicker: string; h2a: string; h2em: string; p1: string; p2: string; cta: string; alt: string };
  solutions: { kicker: string; h2a: string; h2em: string; sub: string; items: Item[]; cta: string; alt: string };
  method: { kicker: string; h2a: string; h2em: string; sub: string; items: Item[]; alt: string };
  field: { kicker: string; h2em: string; h2b: string; sub: string; points: string[]; cta: string };
  faq: { kicker: string; h2a: string; h2em: string; items: { q: string; a: string }[] };
  contact: {
    kicker: string; h2a: string; h2em: string; sub: string; address: string; phone: string;
    addressValue: string; alt: string;
    f: { name: string; email: string; tel: string; type: string; typeOpts: string[]; location: string; message: string; consent: string; submit: string; sending: string; privacy: string };
    err: { name: string; email: string; message: string; consent: string; generic: string };
    ok: string;
  };
  footer: { tagline: string; rights: string };
};

export const DICT: Record<Lang, Dict> = {
  fr: {
    skip: "Aller au contenu",
    nav: { about: "À propos", solutions: "Solutions", method: "Méthode", faq: "FAQ", contact: "Contact", quote: "Demander un devis", menu: "Ouvrir le menu", close: "Fermer le menu" },
    hero: { kicker: "01 — Monastir · Tunisie", h1a: "L'énergie", h1b: "solaire,", h1em: "maîtrisée.", sub: "Étude et installation photovoltaïque pour les maisons et les entreprises.", cta: "Étude gratuite", cta2: "Voir les solutions", alt: "Rangées de panneaux photovoltaïques inclinés au lever du soleil, avec la mer et les collines en arrière-plan" },
    intro: { kicker: "02 — Nos solutions", h2a: "Habitat ou site", h2em: "industriel.", sub: "Dimensionnement, pose et suivi, pensés pour le climat tunisien.", cta: "Voir les solutions", tags: ["Résidentiel", "Tertiaire", "Industriel"] },
    conviction: { kicker: "Notre conviction", text: "Une énergie propre se construit avec {1} : chaque toit étudié, chaque câble choisi, chaque kilowatt {2}.", em1: "précision", em2: "expliqué", alt: "Technicien inspectant une rangée de panneaux photovoltaïques sur une toiture contemporaine" },
    about: { kicker: "03 — À propos", h2a: "Une entreprise tunisienne, basée à", h2em: "Monastir.", p1: "MASHARIQ Energy conçoit et installe des systèmes photovoltaïques pour les particuliers et les professionnels. Notre approche commence toujours par une étude technique, jamais par une promesse.", p2: "Notre mission : rendre l'énergie solaire lisible. Comprendre sa consommation, son dimensionnement et son horizon de rentabilité avant de s'engager.", cta: "Nous écrire", alt: "Villa méditerranéenne équipée de panneaux solaires à la lumière du soir" },
    solutions: { kicker: "04 — Solutions", h2a: "Trois échelles, une même", h2em: "exigence.", sub: "La puissance change, la méthode non : un relevé sur site, un dimensionnement écrit, une installation contrôlée.", items: [
      { t: "Résidentiel", d: "Villas et maisons : autoconsommation étudiée à partir de votre consommation réelle et de la surface de toiture disponible." },
      { t: "Tertiaire", d: "Commerces, bureaux et bâtiments agricoles : priorité aux usages diurnes, là où la production solaire est consommée sur place." },
      { t: "Industriel", d: "Sites à forte consommation : analyse de charge, implantation en toiture ou au sol, et suivi de la production." },
    ], cta: "Demander une étude", alt: "Équipe d'installation solaire au travail sur une toiture en fin de journée" },
    method: { kicker: "05 — Notre méthode", h2a: "Quatre étapes, zéro", h2em: "improvisation.", sub: "Un projet solaire se joue autant sur le toit que dans les calculs qui le précèdent.", items: [
      { t: "Visite et relevés", d: "Toiture, ombrage, tableau électrique, habitudes de consommation : nous mesurons avant de proposer." },
      { t: "Dimensionnement", d: "Puissance, onduleur, protections, structure : un plan chiffré, expliqué poste par poste." },
      { t: "Installation", d: "Pose, câblage, mise à la terre et contrôle des protections, avec un soin particulier porté à l'étanchéité." },
      { t: "Mise en service", d: "Vérification du fonctionnement, remise des documents techniques et explication du suivi de production." },
    ], alt: "Vue large d'un champ solaire au sol dans un paysage aride méditerranéen" },
    field: { kicker: "06 — Sur le terrain", h2em: "Chaque", h2b: "détail compte au soleil.", sub: "Fixations, ventilation, chemins de câbles, étanchéité : ce que l'on ne voit pas décide de ce que l'installation produira dans dix ans.", points: ["Structures dimensionnées pour le vent local", "Ventilation arrière des modules", "Étanchéité contrôlée après pose"], cta: "Parler de votre projet" },
    faq: { kicker: "07 — Questions fréquentes", h2a: "Ce que l'on nous demande", h2em: "souvent.", items: [
      { q: "Comment fonctionne une installation photovoltaïque ?", a: "Les modules convertissent la lumière en courant continu ; l'onduleur le transforme en courant alternatif utilisable dans le bâtiment. La production est d'abord consommée sur place, le reste dépend du montage choisi." },
      { q: "Comment dimensionner une installation solaire en Tunisie ?", a: "On part de la consommation réelle — factures et profil horaire — puis de l'orientation, de l'inclinaison et de l'ombrage du toit. Un bon dimensionnement vise l'usage diurne plutôt que la puissance maximale affichée." },
      { q: "Quels facteurs influencent le coût d'une installation ?", a: "La puissance, la qualité des modules et de l'onduleur, le type de structure et d'étanchéité, la longueur de câblage, la difficulté d'accès et les éventuels travaux de tableau. Un devis détaillé explique chaque poste." },
      { q: "Quel entretien nécessite une installation solaire ?", a: "Un nettoyage périodique des modules, un contrôle visuel des fixations et des câbles, et la vérification de la production. Le rythme dépend surtout de l'exposition à la poussière et au sable." },
      { q: "Travaillez-vous en dehors de Monastir ?", a: "Notre base est à Monastir, au 94 Neopark. Nous étudions chaque demande selon la distance et la nature du projet : appelez le +216 21 054 054 pour vérifier votre zone." },
      { q: "Peut-on suivre la production après l'installation ?", a: "Selon l'onduleur retenu, l'application du fabricant affiche la production en temps réel. Nous vous expliquons la lecture des données lors de la mise en service." },
    ] },
    contact: { kicker: "08 — Contact", h2a: "Parlons de votre", h2em: "toiture.", sub: "Décrivez votre projet en quelques lignes : nous revenons vers vous avec une première réponse technique.", address: "Adresse", phone: "Téléphone", addressValue: "94 Neopark, Monastir 5000, Tunisie", alt: "Paysage côtier tunisien au crépuscule, ciel bleu profond et bande de lumière chaude",
      f: { name: "Nom et prénom", email: "E-mail", tel: "Téléphone", type: "Vous êtes", typeOpts: ["Particulier", "Entreprise", "Exploitation agricole", "Autre"], location: "Localisation du projet", message: "Votre projet", consent: "J'accepte d'être contacté au sujet de ma demande.", submit: "Envoyer la demande", sending: "Envoi en cours…", privacy: "Vos informations servent uniquement à répondre à votre demande." },
      err: { name: "Indiquez votre nom (2 caractères minimum).", email: "Indiquez une adresse e-mail valide.", message: "Décrivez votre projet (5 caractères minimum).", consent: "Votre accord est nécessaire pour vous recontacter.", generic: "L'envoi a échoué. Réessayez ou appelez-nous au +216 21 054 054." },
      ok: "Merci, votre demande a bien été enregistrée. Nous revenons vers vous rapidement." },
    footer: { tagline: "Étude et installation photovoltaïque à Monastir, Tunisie.", rights: "Tous droits réservés." },
  },
  en: {
    skip: "Skip to content",
    nav: { about: "About", solutions: "Solutions", method: "Method", faq: "FAQ", contact: "Contact", quote: "Request a quote", menu: "Open menu", close: "Close menu" },
    hero: { kicker: "01 — Monastir · Tunisia", h1a: "Solar", h1b: "energy,", h1em: "mastered.", sub: "Photovoltaic studies and installation for homes and businesses.", cta: "Free assessment", cta2: "See solutions", alt: "Rows of tilted photovoltaic panels at sunrise, with the sea and hills in the background" },
    intro: { kicker: "02 — Our solutions", h2a: "Home or", h2em: "industrial site.", sub: "Sizing, installation and monitoring, designed for the Tunisian climate.", cta: "See solutions", tags: ["Residential", "Commercial", "Industrial"] },
    conviction: { kicker: "Our conviction", text: "Clean energy is built with {1}: every roof studied, every cable chosen, every kilowatt {2}.", em1: "precision", em2: "explained", alt: "Technician inspecting a row of photovoltaic panels on a contemporary rooftop" },
    about: { kicker: "03 — About", h2a: "A Tunisian company, based in", h2em: "Monastir.", p1: "MASHARIQ Energy designs and installs photovoltaic systems for households and businesses. Our approach always starts with a technical study, never with a promise.", p2: "Our mission: make solar energy easy to understand. Know your consumption, your system size and your payback horizon before committing.", cta: "Write to us", alt: "Mediterranean villa fitted with solar panels in the evening light" },
    solutions: { kicker: "04 — Solutions", h2a: "Three scales, one", h2em: "standard.", sub: "The power changes, the method doesn't: an on-site survey, a written sizing, a checked installation.", items: [
      { t: "Residential", d: "Villas and houses: self-consumption designed from your actual consumption and available roof area." },
      { t: "Commercial", d: "Shops, offices and farm buildings: focus on daytime use, where solar production is consumed on site." },
      { t: "Industrial", d: "High-consumption sites: load analysis, rooftop or ground-mounted layout, and production monitoring." },
    ], cta: "Request a study", alt: "Solar installation team at work on a rooftop at the end of the day" },
    method: { kicker: "05 — Our method", h2a: "Four steps, zero", h2em: "improvisation.", sub: "A solar project is decided as much on the roof as in the calculations that come before it.", items: [
      { t: "Site visit & survey", d: "Roof, shading, electrical panel, consumption habits: we measure before we propose." },
      { t: "Sizing", d: "Power, inverter, protections, structure: a costed plan, explained item by item." },
      { t: "Installation", d: "Mounting, wiring, earthing and protection checks, with particular care for waterproofing." },
      { t: "Commissioning", d: "Operational check, handover of technical documents and a walkthrough of production monitoring." },
    ], alt: "Wide view of a ground-mounted solar field in an arid Mediterranean landscape" },
    field: { kicker: "06 — In the field", h2em: "Every", h2b: "detail matters in the sun.", sub: "Fixings, ventilation, cable routes, waterproofing: what you can't see decides what the system will produce in ten years.", points: ["Structures sized for local wind", "Rear ventilation of modules", "Waterproofing checked after installation"], cta: "Discuss your project" },
    faq: { kicker: "07 — FAQ", h2a: "What people", h2em: "often ask us.", items: [
      { q: "How does a photovoltaic installation work?", a: "Modules convert light into direct current; the inverter turns it into alternating current usable in the building. Production is consumed on site first; the rest depends on the chosen setup." },
      { q: "How do you size a solar installation in Tunisia?", a: "We start from actual consumption — bills and hourly profile — then the roof's orientation, tilt and shading. Good sizing targets daytime use rather than the highest advertised power." },
      { q: "What affects the cost of an installation?", a: "Power, module and inverter quality, structure and waterproofing type, cable length, access difficulty and any electrical panel work. A detailed quote explains each item." },
      { q: "What maintenance does a solar installation need?", a: "Periodic module cleaning, a visual check of fixings and cables, and production checks. The frequency mainly depends on exposure to dust and sand." },
      { q: "Do you work outside Monastir?", a: "We are based in Monastir, at 94 Neopark. We review each request based on distance and project type: call +216 21 054 054 to check your area." },
      { q: "Can I monitor production after installation?", a: "Depending on the inverter, the manufacturer's app shows production in real time. We explain how to read the data at commissioning." },
    ] },
    contact: { kicker: "08 — Contact", h2a: "Let's talk about your", h2em: "roof.", sub: "Describe your project in a few lines: we'll get back to you with an initial technical answer.", address: "Address", phone: "Phone", addressValue: "94 Neopark, Monastir 5000, Tunisia", alt: "Tunisian coastline at dusk, deep blue sky and a band of warm light",
      f: { name: "Full name", email: "Email", tel: "Phone", type: "You are", typeOpts: ["Individual", "Business", "Farm", "Other"], location: "Project location", message: "Your project", consent: "I agree to be contacted about my request.", submit: "Send request", sending: "Sending…", privacy: "Your information is used only to answer your request." },
      err: { name: "Enter your name (at least 2 characters).", email: "Enter a valid email address.", message: "Describe your project (at least 5 characters).", consent: "We need your consent to contact you.", generic: "Sending failed. Try again or call us on +216 21 054 054." },
      ok: "Thank you, your request has been recorded. We'll get back to you soon." },
    footer: { tagline: "Photovoltaic studies and installation in Monastir, Tunisia.", rights: "All rights reserved." },
  },
  ar: {
    skip: "الانتقال إلى المحتوى",
    nav: { about: "من نحن", solutions: "الحلول", method: "منهجيتنا", faq: "الأسئلة", contact: "اتصل بنا", quote: "اطلب عرض سعر", menu: "فتح القائمة", close: "إغلاق القائمة" },
    hero: { kicker: "01 — المنستير · تونس", h1a: "الطاقة", h1b: "الشمسية،", h1em: "بإتقان.", sub: "دراسة وتركيب أنظمة الطاقة الشمسية الكهروضوئية للمنازل والمؤسسات.", cta: "دراسة مجانية", cta2: "اكتشف الحلول", alt: "صفوف من الألواح الكهروضوئية المائلة عند شروق الشمس مع البحر والتلال في الخلفية" },
    intro: { kicker: "02 — حلولنا", h2a: "مسكن أو موقع", h2em: "صناعي.", sub: "تحديد القدرة والتركيب والمتابعة، مصمّمة لمناخ تونس.", cta: "اكتشف الحلول", tags: ["سكني", "تجاري وخدمي", "صناعي"] },
    conviction: { kicker: "قناعتنا", text: "الطاقة النظيفة تُبنى {1}: كل سطح مدروس، كل كابل مختار، وكل كيلوواط {2}.", em1: "بدقّة", em2: "مشروح", alt: "فني يفحص صفاً من الألواح الكهروضوئية على سطح حديث" },
    about: { kicker: "03 — من نحن", h2a: "شركة تونسية مقرّها", h2em: "المنستير.", p1: "تصمّم MASHARIQ Energy وتركّب أنظمة كهروضوئية للأفراد والمهنيين. يبدأ نهجنا دائماً بدراسة تقنية، لا بوعد.", p2: "مهمتنا: جعل الطاقة الشمسية واضحة. أن تفهم استهلاكك وحجم منظومتك وأفق مردوديتها قبل الالتزام.", cta: "راسلنا", alt: "فيلا متوسطية مجهّزة بألواح شمسية في ضوء المساء" },
    solutions: { kicker: "04 — الحلول", h2a: "ثلاثة أحجام، ونفس", h2em: "الصرامة.", sub: "تتغيّر القدرة ولا تتغيّر المنهجية: معاينة ميدانية، تحديد مكتوب للقدرة، وتركيب مُراقَب.", items: [
      { t: "سكني", d: "الفيلات والمنازل: استهلاك ذاتي مدروس انطلاقاً من استهلاكك الفعلي ومساحة السطح المتاحة." },
      { t: "تجاري وخدمي", d: "المحلات والمكاتب والمباني الفلاحية: الأولوية للاستعمال النهاري حيث يُستهلك الإنتاج الشمسي في الموقع." },
      { t: "صناعي", d: "المواقع ذات الاستهلاك المرتفع: تحليل الأحمال، التركيب على الأسطح أو على الأرض، ومتابعة الإنتاج." },
    ], cta: "اطلب دراسة", alt: "فريق تركيب الطاقة الشمسية يعمل على سطح في نهاية اليوم" },
    method: { kicker: "05 — منهجيتنا", h2a: "أربع مراحل، دون أي", h2em: "ارتجال.", sub: "يُحسم المشروع الشمسي على السطح بقدر ما يُحسم في الحسابات التي تسبقه.", items: [
      { t: "الزيارة والقياسات", d: "السطح، الظل، اللوحة الكهربائية، عادات الاستهلاك: نقيس قبل أن نقترح." },
      { t: "تحديد القدرة", d: "القدرة، العاكس، الحمايات، الهيكل: مخطط مُسعّر ومشروح بنداً بنداً." },
      { t: "التركيب", d: "التثبيت، التوصيل، التأريض ومراقبة الحمايات، مع عناية خاصة بالعزل المائي." },
      { t: "التشغيل", d: "التحقق من الاشتغال، تسليم الوثائق التقنية وشرح متابعة الإنتاج." },
    ], alt: "منظر واسع لحقل شمسي أرضي في مشهد متوسطي جاف" },
    field: { kicker: "06 — في الميدان", h2em: "كل", h2b: "تفصيل مهمّ تحت الشمس.", sub: "التثبيتات، التهوية، مسارات الكابلات، العزل المائي: ما لا يُرى هو ما يحدّد إنتاج المنظومة بعد عشر سنوات.", points: ["هياكل محسوبة لرياح المنطقة", "تهوية خلفية للألواح", "مراقبة العزل المائي بعد التركيب"], cta: "حدّثنا عن مشروعك" },
    faq: { kicker: "07 — الأسئلة الشائعة", h2a: "ما يُطرح علينا", h2em: "كثيراً.", items: [
      { q: "كيف تعمل منظومة الطاقة الكهروضوئية؟", a: "تحوّل الألواح الضوء إلى تيار مستمر، ثم يحوّله العاكس إلى تيار متناوب قابل للاستعمال في المبنى. يُستهلك الإنتاج أولاً في الموقع، ويتوقف الباقي على نوع التركيب المختار." },
      { q: "كيف يتم تحديد قدرة منظومة شمسية في تونس؟", a: "ننطلق من الاستهلاك الفعلي — الفواتير والملف الزمني — ثم اتجاه السطح وميله والظلال. التحديد الجيد يستهدف الاستعمال النهاري بدل أعلى قدرة معلنة." },
      { q: "ما العوامل التي تؤثر في تكلفة المنظومة؟", a: "القدرة، جودة الألواح والعاكس، نوع الهيكل والعزل، طول الكابلات، صعوبة الوصول وأشغال اللوحة الكهربائية المحتملة. عرض السعر المفصّل يشرح كل بند." },
      { q: "ما الصيانة التي تحتاجها المنظومة الشمسية؟", a: "تنظيف دوري للألواح، فحص بصري للتثبيتات والكابلات، والتحقق من الإنتاج. يتوقف النسق أساساً على التعرّض للغبار والرمال." },
      { q: "هل تعملون خارج المنستير؟", a: "مقرّنا في المنستير، 94 Neopark. ندرس كل طلب حسب المسافة وطبيعة المشروع: اتصل بالرقم ‎+216 21 054 054 للتحقق من منطقتك." },
      { q: "هل يمكن متابعة الإنتاج بعد التركيب؟", a: "حسب العاكس المختار، يعرض تطبيق المُصنّع الإنتاج في الوقت الحقيقي. نشرح لك قراءة البيانات عند التشغيل." },
    ] },
    contact: { kicker: "08 — اتصل بنا", h2a: "لنتحدث عن", h2em: "سطحك.", sub: "صف مشروعك في بضعة أسطر: نعود إليك بإجابة تقنية أولى.", address: "العنوان", phone: "الهاتف", addressValue: "94 Neopark، المنستير 5000، تونس", alt: "ساحل تونسي عند الغسق، سماء زرقاء داكنة وشريط من الضوء الدافئ",
      f: { name: "الاسم واللقب", email: "البريد الإلكتروني", tel: "الهاتف", type: "أنت", typeOpts: ["فرد", "مؤسسة", "مستغلة فلاحية", "أخرى"], location: "موقع المشروع", message: "مشروعك", consent: "أوافق على أن يتم الاتصال بي بخصوص طلبي.", submit: "إرسال الطلب", sending: "جارٍ الإرسال…", privacy: "تُستخدم معلوماتك فقط للرد على طلبك." },
      err: { name: "أدخل اسمك (حرفان على الأقل).", email: "أدخل بريداً إلكترونياً صحيحاً.", message: "صف مشروعك (5 أحرف على الأقل).", consent: "نحتاج موافقتك للاتصال بك.", generic: "تعذّر الإرسال. أعد المحاولة أو اتصل بنا على ‎+216 21 054 054." },
      ok: "شكراً، تم تسجيل طلبك. سنعود إليك قريباً." },
    footer: { tagline: "دراسة وتركيب أنظمة كهروضوئية في المنستير، تونس.", rights: "جميع الحقوق محفوظة." },
  },
};
