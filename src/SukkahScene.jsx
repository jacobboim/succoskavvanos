import React, { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Float,
  Sparkles,
  Html,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./InfoPanel.css";
import "./DaledMinum3D.css";

// ─── ALL CONTENT DATA ─────────────────────────────────────────────────────────

const DIRECTIONS_INFO = {
  south: {
    name: "South (דרום)",
    title: "Right — Chesed",
    icon: "→",
    color: "#FFD700",
    colorDark: "#DAA520",
    sefirah: "Chesed (Loving-kindness) — אברהם אבינו",
    guest: "Avraham Avinu",
    divineName: "יֶהֶוֶהֶ",
    essence: "Divine Love & Expansion",
    primaryIntention:
      "Let divine love flow through me to awaken authentic love for Hashem, Torah, and all of Israel.",
    goingOut:
      "Contemplate how everything in creation is השפעת אור השי\"ת — the influence of divine light. See Hashem's personal influence upon you, both in your essential existence and in every detail.",
    comingIn:
      "Draw this recognition into אהבת ה' בכל לב — complete love of Hashem with all your heart. Feel your heart opening to divine love.",
    meditation:
      "Focus on the divine name יֶהֶוֶהֶ, arousing flames of divine love. Raise Chesed to its root in Da'at. Elevate personal love toward Hashem above worldly desires.",
    mystical:
      "Connect to the primordial light of creation, drawing from the infinite compassion of Ein Sof. Bring this light into Malchut, inspiring love and devotion.",
    practical:
      "Study Torah from love • Practice chesed, recognizing everything belongs to Hashem • Cultivate אהבת ישראל by seeing every Jew as חלק אלוה ממעל ממש",
    elevation:
      "Transform any physical attractions by recognizing the divine spark within all things. There is no true pleasure except in delighting in Hashem and His love.",
    effect: "Hearts opened to receive divine love and to give it to others.",
  },
  north: {
    name: "North (צפון)",
    title: "Left — Gevurah",
    icon: "←",
    color: "#DC143C",
    colorDark: "#8B0000",
    sefirah: "Gevurah (Divine Strength) — יצחק אבינו",
    guest: "Yitzchak Avinu",
    divineName: "יְהְוְהְ",
    essence: "Divine Strength & Boundaries",
    primaryIntention:
      "Strengthen me with proper fear of Heaven — not fear of people, but awe of the Divine.",
    threeLevels:
      "יראת העונש: Know there is a judge and judgment • יראת חטא: Fear transgression because it distances you from Hashem • יראת הרוממות: Enter awe from the height of His awesome majesty",
    meditation:
      "Focus on יְהְוְהְ, arousing tremendous awe of Hashem. Raise Gevurah to its root in Da'at. Focus on divine strength and boundaries — the ability to say 'no' to evil.",
    mystical:
      "Gevurah is tzimtzum — divine contraction creating space for our choices. Channel the contracting force that creates vessels for divine light.",
    practical:
      "Don't fear anything except Hashem • 'I am ashamed before my Creator that He should see me fearing something other than Him'",
    effect:
      "Inner strength to overcome spiritual challenges and maintain boundaries.",
  },
  east: {
    name: "East (מזרח)",
    title: "Forward — Tiferet",
    icon: "↑",
    color: "#9370DB",
    colorDark: "#663399",
    sefirah: "Tiferet (Divine Beauty) — יעקב אבינו",
    guest: "Yaakov Avinu",
    divineName: "יֹהֹוֹהֹ",
    essence: "Divine Beauty & Balance",
    primaryIntention:
      "Help me feel truly connected to You, experiencing devekut — divine attachment — in every moment.",
    devekut:
      "Devekut is feeling a soul connection like glue joining two things. True connection requires both — feeling Hashem's greatness (chesed) combined with sensing His immediate presence (gevurah).",
    twoPaths:
      "Torah Study in Holiness: Learn recognizing that Torah is עצמותו אורו ית' — His essential light • Speaking with Hashem: Pour out your heart, requesting everything and thanking Him for everything.",
    meditation:
      "Focus on יֹהֹוֹהֹ, feeling harmony between chesed and gevurah. Align with the beauty of Torah rather than seeking worldly approval.",
    mystical:
      "The human realm (מה — 'what?') seeking divine beauty. Beautify service to Hashem. Pray for spiritual renewal to shine on all Israel.",
    practical:
      "Include everything in your devekut • See every occurrence as a 'bat kol' • Flee from pride: 'I and he cannot dwell in one dwelling'",
    effect: "Balance and harmony in spiritual practice and daily life.",
  },
  west: {
    name: "West (מערב)",
    title: "Back — Yesod",
    icon: "↓",
    color: "#4169E1",
    colorDark: "#1E3A8A",
    sefirah: "Yesod (Foundation) — יוסף הצדיק",
    guest: "Yosef HaTzaddik",
    divineName: "יוּהוּווּהוּ",
    essence: "Holy Foundation & Connection",
    primaryIntention:
      "Keep me faithful and connected to You in all circumstances, pure in my intentions.",
    covenant:
      "Yesod is התקשרות והתחברות — remaining connected to Hashem even without feeling devekut. Continue practically to remain bound to Hashem in every situation.",
    completeForm:
      "All actions, words, and thoughts revolve only around Hashem. Derive pleasure only from holiness and remain faithful, not taking pleasures that kelipot offer.",
    primaryTest:
      "The main test involves pleasures of this world. Victory here brings the greatest spiritual pleasure and connection to Hashem, Torah, tefilah, Shabbat.",
    meditation:
      "Focus on יוּהוּווּהוּ, establishing purity. Raise Yesod to its root. Dedicate yourself fully to Hashem's service with purity of intent.",
    mystical: "The channel through which all upper lights flow to Malchut.",
    practical:
      "Sanctify permitted physical pleasures • Flee from anything connecting to evil • In every pleasure, connect to the divine spark",
    effect:
      "Strong foundation for spiritual growth and connection to the community of Israel.",
  },
  up: {
    name: "Up (מעלה)",
    title: "Above — Netzach",
    icon: "⬆",
    color: "#FF69B4",
    colorDark: "#C71585",
    sefirah: "Netzach (Eternal Victory) — משה רבינו",
    guest: "Moshe Rabbeinu",
    divineName: "יִהִוִהִ",
    essence: "Eternal Victory & Persistence",
    primaryIntention:
      "Give me strength to overcome spiritual obstacles and persist even when I don't feel inspired.",
    powerOfMemory:
      "Even without מוחין (divine consciousness) and without feeling love in your heart, stand strong through memory of truth you've already felt.",
    whatToRemember:
      "Hashem's love toward you • Your love toward Hashem • The covenant of love made with you • Your commitment to remain faithful even without vitality",
    meditation:
      "Focus on יִהִוִהִ, channeling divine persistence. Raise Netzach to its root. Channel energy toward eternal goals above reason and knowledge.",
    mystical:
      "Netzach operates למעלה מטעם ודעת — above reason. Sometimes you must persist with holy stubbornness even when logic doesn't support you.",
    mosheExample:
      "Moshe stood firm through tremendous trials before age 80. No one reaches high levels without literally overcoming through netzach.",
    caution:
      "Don't misuse this trait for stubbornness in wrong directions. If Heaven is clearly blocking something, withdraw in honor of your Creator.",
    effect:
      "Persistent spiritual strength and divine assistance in challenges.",
  },
  down: {
    name: "Down (מטה)",
    title: "Below — Hod",
    icon: "⬇",
    color: "#FF8C00",
    colorDark: "#FF6347",
    sefirah: "Hod (Acknowledgment) — אהרן הכהן",
    guest: "Aharon HaKohen",
    divineName: "יֻהֻוֻהֻ",
    essence: "Acknowledgment & Gratitude",
    primaryIntention:
      "Let me truly recognize that everything comes from You and constantly give thanks.",
    twoAspects:
      "Acknowledgment of Hidden Reality: Acknowledge Hashem's existence even when you don't feel Him • Gratitude and Recognition: Thank and praise for all the good Hashem has given.",
    essenceOfHod:
      "Acknowledging what isn't visible to the eyes — recognizing inner reality. When you 'live' this awareness, you see Hashem's hand in everything.",
    meditation:
      "Focus on יֻהֻוֻהֻ, cultivating gratitude. Raise Hod to its root. Cultivate gratitude for Hashem's gifts in every moment.",
    mystical: "Acknowledge divine sovereignty and our dependence on His grace.",
    practical:
      "Give praise for everything • Acknowledge apparent difficulties as good • Avoid false external beauty without inner substance",
    effect:
      "Heart filled with appreciation and humble recognition of divine gifts.",
  },
};

const SPECIES_INFO = {
  lulav: {
    name: "Lulav (לולב)",
    title: "The Palm Branch — Spine of Connection",
    letter: "ו (Vav)",
    content:
      "The לולב represents your spinal column — the channel connecting mind and heart, brain and body. Shaped like the letter ו (vav), it serves as a pillar connecting heaven and earth. The word לולב can be read as 'לו לב' — 'to Him the heart', its primary purpose is subjugating your heart to Hashem.",
    gematria:
      "לולב equals חיים (life) in gematria — you are literally grasping eternal life, the Tree of Life itself.",
    anatomy: "Corresponds to the spine in human anatomy",
    perception:
      "Has טעם ולא ריח (taste without fragrance) — representing tangible perception for דרי מטה (lower worlds).",
    mechanics:
      'The לולב requires constant הולכה והבאה because לולב contains ל"ו ל"ב (36 and 32) that subjugate the heart and all vitality to the Creator.',
    practice:
      "When you raise and lower it, divine consciousness flows from your intellect down through your spine into your heart, spreading to all your limbs.",
    treeOfLife:
      "After Yom Kippur's purification, the lulav is your 'stretching forth the hand to the Tree of Life' — no longer forbidden, actively encouraged.",
  },
  etrog: {
    name: "Etrog (אתרוג)",
    title: "The Citron — Heart of Unity",
    letter: "ה (Hey — Final)",
    content:
      "The אתרוג is unique — the only fruit where tree and fruit taste the same, rectifying the primordial sin when Earth failed to make trees taste like their fruit. Has both ריח וטעם (fragrance and taste), representing integration of all worlds for יראה (divine awe).",
    precedence:
      "By mentioning the etrog first, the Torah reveals the power of נעשה ונשמע — doing before understanding. Lifting the etrog first demonstrates Israel's ability to act from pure faith, like the ministering angels.",
    anatomy: "Corresponds to the heart in human anatomy",
    malchut:
      "As בחינת מלכות, the etrog unifies transcendent perception (fragrance) with immanent perception (taste). You must include both אַיֵּה (where is He) and מלא כל הארץ כבודו for true יראה.",
    rectification:
      "Holding the etrog heals the original separation between giver and receiver, source and result — restoring unity where משפיע and מקבל exist in perfect harmony.",
    practice:
      "Imagine the etrog as your heart — each wave draws חסד from the transcendent level into your heart, flowing to all corresponding limbs.",
  },
  hadassim: {
    name: "Hadassim (הדסים)",
    title: "The Myrtles — Eyes of the Patriarchs",
    letter: "י (Yud)",
    content:
      "The three הדסים represent the three Patriarchs whose holiness descends through joy to the lowest levels. Has ריח ולא טעם (fragrance without taste) — representing דרי מעלה (upper worlds) whose perception is subtle and transcendent, beyond physical grasp.",
    anatomy: "Corresponds to the eyes in human anatomy",
    soul: "The נשמה (soul) benefits only from ריח (fragrance) because הנשמה היא בחינת דרי מעלה. Fragrance represents transcendent perception beyond physical grasp.",
    patriarchs:
      "Shaking draws the elevated מידות of חסד, גבורה, ותפארת down to your feet — the מידות of נצח, הוד, יסוד. Joy in mitzvot channels holiness from the highest levels into physical action.",
    pattern:
      "Three myrtles represent the threefold pattern תלת גו תלת throughout creation — like the letter למד with three sections.",
    symbolism:
      "Represents Jewish souls who have good deeds, showing elevated service requires grounding in physical mitzvot.",
  },
  aravot: {
    name: "Aravot (ערבות)",
    title: "The Willows — Voice of Unity",
    letter: "ה (Hey — First)",
    content:
      "ערבי נחל have neither taste nor fragrance, representing פושעי ישראל and שוכני עפר. Yet they are bound with the tzaddik's lulav — even they can connect to righteousness and should never despair, for מלא כל הארץ כבודו — divine glory fills even the lowest places.",
    anatomy: "Corresponds to the lips and speech in human anatomy",
    seventy:
      "ערבה is the acronym for ע׳ רבה (Great Seventy), corresponding to the large ע in שמע ישראל — spreading divine unity into all seventy languages and nations.",
    awakening:
      "The נענועים are like waking someone from sleep — מנערין ומנענעין כל השוכני עפר שיקוצו משנתם (shaking all the dwellers in dust so they awaken from sleep).",
    unity:
      "Even willows (representing sinners) are bound with the tzaddik's lulav — showing that they too can connect to righteousness and should never despair.",
    practice:
      "When you shake, you extend the proclamation of divine oneness into every corner of creation, preparing the world for when all nations will recognize the one Creator.",
    symbolism:
      "Represents Jewish souls who have neither Torah nor good deeds, yet are still bound with all Israel — showing fundamental unity of the Jewish people.",
  },
};

const USHPIZIN = [
  {
    key: "avraham",
    name: "Avraham Avinu",
    hebrew: "אברהם אבינו",
    day: 1,
    sefirah: "Chesed",
    color: "#FFD700",
    colorDark: "#B8860B",
    icon: "🌟",
    teachings: [
      {
        title: "The Open Tent",
        content:
          "Avraham's tent was open on all four sides to welcome guests from every direction. The sukkah too should be open — welcoming all who seek shelter. This is pure chesed materialized in wood and branches.",
      },
      {
        title: "Wanderer's Faith",
        content:
          "Avraham was called to leave his home and wander, dwelling in temporary shelters his whole life. He never built a permanent home because he knew true permanence exists only in Hashem's embrace — exactly the lesson of the sukkah.",
      },
      {
        title: "Ushpizin — Welcoming Guests",
        content:
          "The mitzva of inviting guests originates with Avraham. The Zohar warns: if no poor guests share your table in the sukkah, the supernal ushpizin depart from it. Physical and spiritual hospitality are intertwined.",
      },
      {
        title: "Chesed Meditation",
        content:
          "On Day 1 of Sukkot, meditate on אהבת חסד — pure unconditional love. The golden glow of the sukkah lanterns recalls the morning light greeting Avraham at his tent, watching for travelers to welcome.",
      },
    ],
  },
  {
    key: "yitzchak",
    name: "Yitzchak Avinu",
    hebrew: "יצחק אבינו",
    day: 2,
    sefirah: "Gevurah",
    color: "#DC143C",
    colorDark: "#8B0000",
    icon: "🔥",
    teachings: [
      {
        title: "After the Akeida",
        content:
          "Yom Kippur just concluded — the day of Yitzchak's essence. We now enter Sukkot carrying that purification, building our sukkah with the strength that comes after complete surrender to Hashem.",
      },
      {
        title: "Bounded Sacred Space",
        content:
          "Gevurah is divine tzimtzum — contraction creating bounded, holy space. The sukkah walls are exactly this: limitation that paradoxically creates infinite spiritual depth. The more defined the space, the more concentrated the holiness.",
      },
      {
        title: "The Altar's Lesson",
        content:
          "Yitzchak lay on the altar fully surrendered. The sukkah asks for similar surrender — leave the security of stone walls, dwell in the fragile booth, trust completely in divine protection.",
      },
      {
        title: "Gevurah Meditation",
        content:
          "Strengthen your יראת שמים — awe of Heaven. Sitting under the vast stars in the fragile sukkah, feel the awesomeness of creation pressing in from all sides. This awe is the gift of Yitzchak's gevurah.",
      },
    ],
  },
  {
    key: "yaakov",
    name: "Yaakov Avinu",
    hebrew: "יעקב אבינו",
    day: 3,
    sefirah: "Tiferet",
    color: "#9370DB",
    colorDark: "#551A8B",
    icon: "⭐",
    teachings: [
      {
        title: "The Origin of Sukkot",
        content:
          "The Torah records: 'Yaakov traveled to Sukkot and built a house AND made sukkot for his cattle — therefore the place is called Sukkot' (Bereishit 33:17). Yaakov himself is the founder of this very mitzva!",
      },
      {
        title: "Truth and Beauty",
        content:
          "Yaakov is called ish tam — a man of wholeness. Tiferet is the harmony between chesed and gevurah, heaven and earth — exactly what the sukkah embodies: open schach above connecting to firm earth below.",
      },
      {
        title: "The Ladder Vision",
        content:
          "Yaakov dreamed of a ladder with its base on earth and top in heaven, with angels ascending and descending. The sukkah is this ladder — a space where heavenly and earthly meet in perfect communion.",
      },
      {
        title: "Beautify the Sukkah",
        content:
          "Honor Yaakov's tiferet through הידור מצוה — making your sukkah as beautiful as possible. Hang fruits, lights, ornamental tapestries. The beautification of the mitzva is itself a mitzva.",
      },
    ],
  },
  {
    key: "moshe",
    name: "Moshe Rabbeinu",
    hebrew: "משה רבינו",
    day: 4,
    sefirah: "Netzach",
    color: "#FF69B4",
    colorDark: "#C71585",
    icon: "🪄",
    teachings: [
      {
        title: "40 Years Under the Clouds",
        content:
          "Moshe led Israel through 40 years under the Clouds of Glory — the original divine sukkot. The entire nation lived in Hashem's miraculous embrace, protected from sun, rain, and enemies by these divine clouds.",
      },
      {
        title: "Clouds vs. Booths",
        content:
          "There is a dispute: the Torah's 'sukkot' recall either the actual booths in the desert, or the divine Clouds of Glory. Moshe bridges both — giver of the written and oral Torah, leader through both realities.",
      },
      {
        title: "Netzach — Persisting Beyond Reason",
        content:
          "Netzach operates above logic. Sometimes you must persist with holy stubbornness even when reason says stop. Moshe's 40-year leadership exemplified this. Dwell in the sukkah even when it's cold and uncomfortable.",
      },
      {
        title: "Make It Your Home",
        content:
          "Halacha says to dwell in the sukkah כדרך שאתה דר — as you normally dwell. Sleep there, bring your finest vessels, eat all meals there. This complete commitment reflects Moshe's netzach.",
      },
    ],
  },
  {
    key: "aharon",
    name: "Aharon HaKohen",
    hebrew: "אהרן הכהן",
    day: 5,
    sefirah: "Hod",
    color: "#FF8C00",
    colorDark: "#CC4400",
    icon: "✨",
    teachings: [
      {
        title: "Joy After Atonement",
        content:
          "Aharon emerged from the Holy of Holies on Yom Kippur and blessed the people. The immediate joy of Sukkot follows — atonement achieved, we now celebrate with splendor. This is Aharon's hod expressed through collective joy.",
      },
      {
        title: "The Priestly Splendor",
        content:
          "Aharon's service involved extraordinary beauty — the golden garments, the temple service, the blessing of Israel. The decorated sukkah, hung with fruits and lights, reflects his hod flowing into this sacred space.",
      },
      {
        title: "Seeing the Hidden",
        content:
          "Hod is acknowledging divine reality even when hidden. The partially covered schach reveals stars while providing shade — balance of revealed and hidden. See Hashem's hand in everything, even what is not obvious.",
      },
      {
        title: "Peace-Seeker",
        content:
          "Aharon 'loved peace and pursued peace.' Use your sukkah as a place of reconciliation — invite those you've had tension with. The holy space of the sukkah can transform relationships.",
      },
    ],
  },
  {
    key: "yosef",
    name: "Yosef HaTzaddik",
    hebrew: "יוסף הצדיק",
    day: 6,
    sefirah: "Yesod",
    color: "#4169E1",
    colorDark: "#00008B",
    icon: "💎",
    teachings: [
      {
        title: "Purity Through Every Test",
        content:
          "Yosef maintained purity through slavery, imprisonment, and temptation. In the sukkah, we voluntarily leave our comfortable homes, demonstrating that holiness is not dependent on circumstances but on inner connection.",
      },
      {
        title: "The Tzaddik as World Foundation",
        content:
          "'צדיק יסוד עולם' — the righteous is the foundation of the world. As the sukkah's frame must be sound to support the schach, the tzaddik's righteousness is the hidden foundation supporting all creation.",
      },
      {
        title: "True Foundation",
        content:
          "The sukkah's temporary walls strip away the illusion that physical security is permanent. What is your true foundation? The connection to Hashem that no circumstance can sever — this is yesod, this is true home.",
      },
      {
        title: "Sanctified Pleasure",
        content:
          "Yosef's yesod transforms physical experience into holiness. In the sukkah, every bite of food, every sip of wine, every moment of family joy becomes a mitzva — the physical entirely sanctified by the holy space.",
      },
    ],
  },
  {
    key: "dovid",
    name: "Dovid HaMelech",
    hebrew: "דוד המלך",
    day: 7,
    sefirah: "Malchut",
    color: "#C8C8C8",
    colorDark: "#888888",
    icon: "👑",
    teachings: [
      {
        title: "The Fallen Sukkah of David",
        content:
          "Amos declares: 'On that day I will raise up the fallen sukkah of David' (9:11). Every sukkah we build is an act of yearning for divine redemption — rebuilding the fallen sukkah from exile toward its ultimate restoration.",
      },
      {
        title: "The Letter ה — Malchut",
        content:
          "The sukkah's three walls form ה (Hey) — the final letter of יהוה, representing Malchut. When you dwell in the sukkah, you are literally dwelling inside the letter ה, inside Divine Kingship itself.",
      },
      {
        title: "Hoshana Rabbah",
        content:
          "The seventh day is Hoshana Rabbah — final sealing of judgment. We circle the bimah seven times, all seven sefirot completing their work, finding expression in Malchut/Dovid. The cosmic cycle of Tishrei reaches its apex.",
      },
      {
        title: "Total Acceptance — קבלת עול",
        content:
          "Dovid's essence is complete acceptance of divine kingship. Accept everything with total faith: joy and difficulty, abundance and limitation — all from the One King whose sovereignty fills the sukkah and the entire universe.",
      },
    ],
  },
];

// ─── 3D COMPONENTS ─────────────────────────────────────────────────────────────

// Exact copy of ClickableIndicator from DaledMinum3DScene
function ClickableIndicator({ position, color, onClick, label }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <circleGeometry args={[0.35, 32]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
      <mesh ref={meshRef} position={[0, 0, 0.01]}>
        <ringGeometry args={[0.18, 0.25, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.9 : 0.6}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <circleGeometry args={[0.13, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.8 : 0.5}
          emissive={color}
          emissiveIntensity={hovered ? 0.7 : 0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      {hovered && (
        <Html distanceFactor={8} position={[0, 0.5, 0]}>
          <div
            style={{
              background: "rgba(0,0,0,0.85)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

// Chassid figure (same as DaledMinum3DScene)
function ChassidFigure({ onSpeciesClick }) {
  const groupRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "/chassidlulavesrog.png");

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.05;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh position={[0, 1.5, 0]}>
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
        <ClickableIndicator
          position={[0.5, 1.0, 0.15]}
          color="#fdd835"
          onClick={() => onSpeciesClick("etrog")}
          label="Etrog 🍋"
        />
        <ClickableIndicator
          position={[-0.6, 2.8, 0.15]}
          color="#8b7355"
          onClick={() => onSpeciesClick("lulav")}
          label="Lulav 🌿"
        />
        <ClickableIndicator
          position={[-0.95, 1.7, 0.15]}
          color="#4caf50"
          onClick={() => onSpeciesClick("hadassim")}
          label="Hadassim 🍃"
        />
        <ClickableIndicator
          position={[-0.25, 1.9, 0.15]}
          color="#81c784"
          onClick={() => onSpeciesClick("aravot")}
          label="Aravot 🌾"
        />
        <Sparkles count={50} scale={4} size={2} speed={0.4} color="#ffd700" />
      </group>
    </Float>
  );
}

// Direction marker (same as DaledMinum3DScene)
function DirectionMarker({
  position,
  color,
  label,
  hebrew,
  onClick,
  isSelected,
  hideLabels,
}) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.lerp(
        new THREE.Vector3(
          hovered || isSelected ? 1.3 : 1,
          hovered || isSelected ? 1.3 : 1,
          hovered || isSelected ? 1.3 : 1
        ),
        0.1
      );
    }
  });

  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
        >
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered || isSelected ? 0.8 : 0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
        {!hideLabels && (
          <Html distanceFactor={10}>
            <div
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                pointerEvents: "none",
                textShadow: "0 0 10px rgba(0,0,0,0.8)",
                whiteSpace: "nowrap",
              }}
            >
              <div>{label}</div>
              <div style={{ fontSize: "16px", marginTop: "3px" }}>{hebrew}</div>
            </div>
          </Html>
        )}
        {(hovered || isSelected) && (
          <Sparkles count={20} scale={2} size={1.5} speed={0.3} color={color} />
        )}
      </Float>
    </group>
  );
}

// Energy beam (same as DaledMinum3DScene)
function EnergyBeam({ from, to, color, visible }) {
  const geometry = useMemo(() => {
    const pts = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [from, to]); // eslint-disable-line

  if (!visible) return null;
  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        attach="material"
        color={color}
        transparent
        opacity={0.6}
      />
    </line>
  );
}

// ─── SUKKAH STRUCTURE ─────────────────────────────────────────────────────────

function WoodWall({ position, rotation = [0, 0, 0], width, height }) {
  const woodTones = useMemo(
    () => ["#8E6239", "#7C532E", "#9A6F46", "#6E4724", "#855B34", "#744E29"],
    []
  );

  const plankW = 0.55;
  const plankCount = Math.floor(width / plankW);
  const remainder = width - plankCount * plankW;

  return (
    <group position={position} rotation={rotation}>
      {/* Horizontal Structural Support Studs */}
      <mesh position={[0, height / 2 - 0.4, 0.12]} castShadow receiveShadow>
        <boxGeometry args={[width, 0.2, 0.15]} />
        <meshStandardMaterial color="#553416" roughness={0.9} />
      </mesh>
      <mesh position={[0, -height / 2 + 0.8, 0.12]} castShadow receiveShadow>
        <boxGeometry args={[width, 0.2, 0.15]} />
        <meshStandardMaterial color="#553416" roughness={0.9} />
      </mesh>

      {/* Vertical Wall Planks */}
      {Array.from({ length: plankCount }).map((_, i) => {
        const xPos = -width / 2 + i * plankW + plankW / 2 + remainder / 2;
        return (
          <group key={i} position={[xPos, 0, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[plankW - 0.02, height, 0.15]} />
              <meshStandardMaterial
                color={woodTones[i % woodTones.length]}
                roughness={0.78}
                metalness={0.05}
              />
            </mesh>
            <mesh position={[0, 0, 0.08]}>
              <boxGeometry args={[0.03, height - 0.5, 0.01]} />
              <meshStandardMaterial
                color="#523418"
                roughness={0.95}
                transparent
                opacity={0.25}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Post({ position, height = 8.4 }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.3, height, 0.3]} />
      <meshStandardMaterial color="#5C3A1E" roughness={0.9} />
    </mesh>
  );
}

function Beam({ position, args }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#4E3017" roughness={0.9} />
    </mesh>
  );
}

// function Schach() {
//   const colors = ["#416D37", "#4E7E43", "#38612E", "#4D703B", "#395E29"];

//   // Main horizontal bamboo/evergreen branches running front-to-back
//   const mainBranches = useMemo(() => {
//     const r = [];
//     let idx = 0;
//     // Increased the spacing step from 0.28 to 0.45 to create physical gaps
//     for (let z = -4.85; z <= 4.85; z += 0.45) {
//       r.push({
//         z,
//         y: 4.62 + (idx % 3) * 0.03,
//         color: colors[idx % colors.length],
//       });
//       idx++;
//     }
//     return r;
//   }, []); // eslint-disable-line

//   // Cross mats running side-to-side
//   const crossBranches = useMemo(() => {
//     const r = [];
//     // Increased spacing step from 0.72 to 0.95 to open up the grid further
//     for (let x = -4.8; x <= 4.8; x += 0.95) {
//       r.push({ x, color: colors[Math.abs(Math.round(x)) % colors.length] });
//     }
//     return r;
//   }, []); // eslint-disable-line

//   return (
//     <group>
//       {/* Main Branches - Thinned out slightly (args depth from 0.22 down to 0.14) */}
//       {mainBranches.map((b, i) => (
//         <mesh key={i} position={[0, b.y, b.z]} castShadow>
//           <boxGeometry args={[10.3, 0.08, 0.14]} />
//           <meshStandardMaterial color={b.color} roughness={0.92} />
//         </mesh>
//       ))}

//       {/* Cross Branches - Thinned out slightly (args width from 0.18 down to 0.12) */}
//       {crossBranches.map((b, i) => (
//         <mesh key={`c${i}`} position={[b.x, 4.65, 0]}>
//           <boxGeometry args={[0.12, 0.06, 10.3]} />
//           <meshStandardMaterial color={b.color} roughness={0.92} />
//         </mesh>
//       ))}
//     </group>
//   );
// }

// ─── NEW AUTHENTIC DECORATION COMPONENTS ──────────────────────────────────────

// Beautiful traditional wall tapestries/banners (Posters) inside the Sukkah

function Schach() {
  const colors = ["#3A6330", "#44703A", "#315428", "#426132", "#325224"];

  // Main horizontal bamboo/evergreen branches running front-to-back
  const mainBranches = useMemo(() => {
    const r = [];
    let idx = 0;
    // Keeping the wide 0.45 step so gaps remain open
    for (let z = -4.85; z <= 4.85; z += 0.45) {
      r.push({
        z,
        y: 4.62 + (idx % 3) * 0.03,
        color: colors[idx % colors.length],
      });
      idx++;
    }
    return r;
  }, []); // eslint-disable-line

  // Cross mats running side-to-side
  const crossBranches = useMemo(() => {
    const r = [];
    // Keeping the wide 0.95 step for spacing
    for (let x = -4.8; x <= 4.8; x += 0.95) {
      r.push({ x, color: colors[Math.abs(Math.round(x)) % colors.length] });
    }
    return r;
  }, []); // eslint-disable-line

  return (
    <group>
      {/* Main Branches - Thicker & Deeper beams (args depth increased to 0.24, height to 0.16) */}
      {mainBranches.map((b, i) => (
        <mesh key={i} position={[0, b.y, b.z]} castShadow>
          <boxGeometry args={[10.3, 0.16, 0.24]} />
          <meshStandardMaterial color={b.color} roughness={0.9} />
        </mesh>
      ))}

      {/* Cross Branches - Wider & Deeper support mats (args width increased to 0.22, height to 0.12) */}
      {crossBranches.map((b, i) => (
        <mesh key={`c${i}`} position={[b.x, 4.66, 0]}>
          <boxGeometry args={[0.22, 0.12, 10.3]} />
          <meshStandardMaterial color={b.color} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function SukkahPoster({
  position,
  rotation,
  width = 3,
  height = 4,
  title,
  subtitle,
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#FFF8DC" roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.015]}>
        <planeGeometry args={[width - 0.15, height - 0.15]} />
        <meshStandardMaterial
          color="#B8860B"
          wireframe
          wireframeLinewidth={3}
        />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <planeGeometry args={[width - 0.2, height - 0.2]} />
        <meshStandardMaterial color="#1e4620" roughness={0.5} />
      </mesh>
      <Html
        transform
        distanceFactor={4}
        position={[0, 0, 0.02]}
        pointerEvents="none"
      >
        <div
          style={{
            color: "#FFD700",
            fontFamily: "serif",
            textAlign: "center",
            width: "260px",
            userSelect: "none",
          }}
        >
          <h2
            style={{
              margin: "5px 0",
              fontSize: "24px",
              borderBottom: "2px solid #FFD700",
              paddingBottom: "5px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#FFFFFF",
              direction: "rtl",
              fontWeight: "bold",
            }}
          >
            {subtitle}
          </p>
          <div style={{ fontSize: "11px", color: "#DDD", marginTop: "15px" }}>
            בסוכות תשבו שבעת ימים
          </div>
        </div>
      </Html>
    </group>
  );
}

// Procedurally hanging fruits (Pomegranates, Grapes, Apples) from the Schach
function HangingDecorations() {
  const fruitTypes = [
    { color: "#C0392B", size: 0.14 },
    { color: "#27AE60", size: 0.12 },
    { color: "#8E44AD", size: 0.11 },
    { color: "#F1C40F", size: 0.13 },
  ];

  const fruits = useMemo(() => {
    const list = [];
    for (let i = 0; i < 20; i++) {
      // Slightly reduced count for performance
      const x = (Math.random() - 0.5) * 8.5;
      const z = (Math.random() - 0.5) * 8.5;
      const length = 0.5 + Math.random() * 1.2;
      const type = fruitTypes[i % fruitTypes.length];
      list.push({ x, z, length, type });
    }
    return list;
  }, []);

  return (
    <group position={[0, 4.5, 0]}>
      {fruits.map((f, i) => (
        <group key={i} position={[f.x, 0, f.z]}>
          {/* Low segment counts (args [0.01, 0.01, f.length, 4]) use way less polygons */}
          <mesh position={[0, -f.length / 2, 0]}>
            <cylinderGeometry args={[0.008, 0.008, f.length, 4]} />
            <meshStandardMaterial color="#d7ccc8" roughness={1} />
          </mesh>
          {/* Lowered sphere fidelity to 8x8 segments instead of 16x16 */}
          <mesh position={[0, -f.length, 0]}>
            <sphereGeometry args={[f.type.size, 8, 8]} />
            <meshStandardMaterial
              color={f.type.color}
              roughness={0.5}
              emissive={f.type.color}
              emissiveIntensity={0.1}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Glowing holiday fairy lights strung across the ceiling corners
function SukkahStringLights() {
  const colors = ["#FF4500", "#FFD700", "#00FF00", "#00FFFF", "#FF00FF"];
  const bulbs = useMemo(() => {
    const list = [];
    for (let side = 0; side < 4; side++) {
      for (let i = 0; i < 10; i++) {
        let x = 0,
          z = 0;
        const offset = -4.5 + i * 1.0;
        if (side === 0) {
          x = offset;
          z = -4.8;
        }
        if (side === 1) {
          x = 4.8;
          z = offset;
        }
        if (side === 2) {
          x = -offset;
          z = 4.8;
        }
        if (side === 3) {
          x = -4.8;
          z = -offset;
        }
        list.push({
          x,
          y: 4.2 - Math.sin((i / 9) * Math.PI) * 0.25,
          z,
          color: colors[(side * 10 + i) % colors.length],
        });
      }
    }
    return list;
  }, []);

  return (
    <group>
      {/* Instead of 40 lights, we use 4 strategic ambient/point lights inside the tent to mimic the glow */}
      <pointLight
        position={[0, 4, -2]}
        intensity={0.5}
        color="#FFD700"
        distance={8}
      />
      <pointLight
        position={[0, 4, 2]}
        intensity={0.5}
        color="#FF4500"
        distance={8}
      />

      {bulbs.map((b, i) => (
        <mesh key={i} position={[b.x, b.y, b.z]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          {/* High emissive gives the visual illusion of a powerful light without the performance hit */}
          <meshStandardMaterial
            color={b.color}
            emissive={b.color}
            emissiveIntensity={2.0}
          />
        </mesh>
      ))}
    </group>
  );
}

// function SukkahShell() {
//   // Walls height = 8 (y: -3.5 to +4.5), width = 10 (x: -5 to +5), depth = 10 (z: -5 to +5)
//   // Front is open (z = +5 faces camera)
//   return (
//     <group>
//       {/* Outer ground */}
//       <mesh position={[0, -3.52, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//         <planeGeometry args={[60, 60]} />
//         <meshStandardMaterial color="#243515" roughness={1} />
//       </mesh>
//       {/* Sukkah floor */}
//       <mesh position={[0, -3.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//         <planeGeometry args={[10.4, 10.4]} />
//         <meshStandardMaterial color="#7A6245" roughness={0.95} />
//       </mesh>

//       {/* Walls */}
//       <WoodWall position={[0, 0.5, -5]} width={10} height={8} />
//       <WoodWall position={[-5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]} width={10} height={8} />
//       <WoodWall position={[5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]} width={10} height={8} />

//       {/* Corner posts */}
//       {[[-5, 0.5, -5], [5, 0.5, -5], [-5, 0.5, 5], [5, 0.5, 5]].map((p, i) => (
//         <Post key={i} position={p} />
//       ))}

//       {/* Frame beams */}
//       <Beam position={[0, 4.57, -5]} args={[10.56, 0.28, 0.28]} />
//       <Beam position={[0, 4.57, 5]} args={[10.56, 0.28, 0.28]} />
//       <Beam position={[-5, 4.57, 0]} args={[0.28, 0.28, 10.56]} />
//       <Beam position={[5, 4.57, 0]} args={[0.28, 0.28, 10.56]} />

//       {/* Schach */}
//       <Schach />

//       {/* Circular golden platform under chassid */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.48, 0]}>
//         <circleGeometry args={[2.2, 64]} />
//         <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.15} transparent opacity={0.5} />
//       </mesh>
//     </group>
//   );
// }

// ─── USHPIZIN WALL ────────────────────────────────────────────────────────────

function SukkahShell() {
  return (
    <group>
      {/* Outer ground */}
      <mesh
        position={[0, -3.52, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#1b2a10" roughness={1} />
      </mesh>
      {/* Sukkah floor covered with traditional festive woven mat */}
      <mesh
        position={[0, -3.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[10.4, 10.4]} />
        <meshStandardMaterial color="#A58963" roughness={0.85} />
      </mesh>

      {/* Decorative wall trim right under beams */}
      <mesh position={[0, 4.35, -4.88]}>
        <planeGeometry args={[9.6, 0.15]} />
        <meshStandardMaterial
          color="#CD7F32"
          emissive="#CD7F32"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Walls (Reconstructed with high-detail WoodWall setup) */}
      <WoodWall position={[0, 0.5, -5]} width={10} height={8} />
      <WoodWall
        position={[-5, 0.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        width={10}
        height={8}
      />
      <WoodWall
        position={[5, 0.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        width={10}
        height={8}
      />

      {/* Modern Clean Banners on Back Wall (No Hebrew) */}
      {/* <SukkahPoster
        position={[-2.2, 1.4, -4.85]}
        rotation={[0, 0, 0]}
        title="Welcome"
        subtitle="To the Shadow of Faith"
      />
      <SukkahPoster
        position={[2.2, 1.4, -4.85]}
        rotation={[0, 0, 0]}
        title="Unity"
        subtitle="Sitting Together as One"
      /> */}

      {/* Hanging Fruit Ornaments and String Lights */}
      <HangingDecorations />
      <SukkahStringLights />

      {/* Corner posts */}
      {[
        [-5, 0.5, -5],
        [5, 0.5, -5],
        [-5, 0.5, 5],
        [5, 0.5, 5],
      ].map((p, i) => (
        <Post key={i} position={p} />
      ))}

      {/* Frame beams */}
      <Beam position={[0, 4.57, -5]} args={[10.56, 0.28, 0.28]} />
      <Beam position={[0, 4.57, 5]} args={[10.56, 0.28, 0.28]} />
      <Beam position={[-5, 4.57, 0]} args={[0.28, 0.28, 10.56]} />
      <Beam position={[5, 4.57, 0]} args={[0.28, 0.28, 10.56]} />

      {/* Schach */}
      <Schach />

      {/* Circular golden platform under chassid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.48, 0]}>
        <circleGeometry args={[2.2, 64]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.4}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}
function UshpizinMedallion({ ushpiz, position, onClick, isSelected }) {
  const [hovered, setHovered] = useState(false);
  const discRef = useRef();

  useFrame(({ clock }) => {
    if (discRef.current) {
      discRef.current.material.emissiveIntensity =
        0.35 + Math.sin(clock.elapsedTime * 1.6 + position[0]) * 0.18;
    }
  });

  return (
    <group position={position}>
      {/* Outer glow ring */}
      <mesh>
        <ringGeometry args={[0.4, 0.5, 40]} />
        <meshStandardMaterial
          color={ushpiz.color}
          emissive={ushpiz.color}
          emissiveIntensity={hovered || isSelected ? 1.2 : 0.6}
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Filled disc */}
      <mesh ref={discRef} position={[0, 0, 0.02]}>
        <circleGeometry args={[0.39, 40]} />
        <meshStandardMaterial
          color={ushpiz.colorDark}
          emissive={ushpiz.color}
          emissiveIntensity={0.35}
          side={THREE.DoubleSide}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Sphere hitbox — consistent click area from any viewing angle */}
      <mesh
        position={[0, -0.1, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.55, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Icon in center */}
      <Html position={[0, 0.06, 0.04]} center distanceFactor={14}>
        <div style={{ fontSize: "22px", pointerEvents: "none", lineHeight: 1 }}>
          {ushpiz.icon}
        </div>
      </Html>

      {/* Day number */}
      <Html position={[0, -0.16, 0.04]} center distanceFactor={14}>
        <div
          style={{
            color: "white",
            fontSize: "11px",
            fontWeight: "bold",
            pointerEvents: "none",
            textShadow: "0 1px 4px rgba(0,0,0,0.9)",
            lineHeight: 1,
          }}
        >
          {ushpiz.day}
        </div>
      </Html>

      {/* Name below circle */}
      <Html position={[0, -0.65, 0.04]} center distanceFactor={14}>
        <div
          style={{
            textAlign: "center",
            pointerEvents: "none",
            lineHeight: 1.3,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "10px",
              fontWeight: "bold",
              textShadow: "0 1px 5px rgba(0,0,0,1)",
              whiteSpace: "nowrap",
            }}
          >
            {ushpiz.hebrew}
          </div>
          <div
            style={{
              color: ushpiz.color,
              fontSize: "9px",
              textShadow: "0 0 6px rgba(0,0,0,0.9)",
            }}
          >
            {ushpiz.sefirah}
          </div>
        </div>
      </Html>

      {(hovered || isSelected) && (
        <Sparkles
          count={12}
          scale={1.2}
          size={1.8}
          speed={0.5}
          color={ushpiz.color}
        />
      )}

      <pointLight
        color={ushpiz.color}
        intensity={hovered || isSelected ? 0.6 : 0.2}
        distance={2.5}
      />
    </group>
  );
}

function UshpizinWall({ onUshpizinClick, selectedUshpiz }) {
  // Group sits just outside the left wall (x = -5) and rotates -90° around Y
  // so its local +z faces outward (world -x), spreading medallions along world z.
  return (
    <group position={[-5.15, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
      {/* "USHPIZIN" Header */}
      <Html position={[0, 3.2, 0.05]} center distanceFactor={14}>
        <div
          style={{
            color: "#FFD700",
            fontSize: "16px",
            fontWeight: "bold",
            letterSpacing: "4px",
            textAlign: "center",
            pointerEvents: "none",
            textShadow: "0 0 10px rgba(255,200,0,0.7)",
            fontFamily: "serif",
            whiteSpace: "nowrap",
          }}
        >
          ✦ אושפיזין ✦
        </div>
      </Html>

      {/* Accent line border under banner header */}
      <mesh position={[0, 2.9, 0.02]}>
        <planeGeometry args={[8.4, 0.02]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 7 Medallions on the outside face of the left wall, spread front-to-back */}
      {USHPIZIN.map((u, i) => (
        <UshpizinMedallion
          key={u.key}
          ushpiz={u}
          position={[-3.6 + i * 1.2, 1.8, 0.05]}
          onClick={() => onUshpizinClick(u.key)}
          isSelected={selectedUshpiz === u.key}
        />
      ))}
    </group>
  );
}

// ─── LIGHTING ─────────────────────────────────────────────────────────────────

function CandleLight() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.intensity =
        0.9 +
        Math.sin(clock.elapsedTime * 8.2) * 0.12 +
        Math.sin(clock.elapsedTime * 13.5) * 0.05;
    }
  });
  return (
    <pointLight
      ref={ref}
      position={[0, 3, 0.5]}
      color="#FFA040"
      distance={16}
      castShadow
    />
  );
}

// Hides direction labels when the camera is outside the sukkah walls.
// The front (z > 5) is open, so labels stay visible there.
function CameraTracker({ onChange }) {
  const prevRef = useRef(false);
  useFrame(({ camera }) => {
    const outside =
      camera.position.x < -5.2 ||
      camera.position.x > 5.2 ||
      camera.position.z < -5.2;
    if (outside !== prevRef.current) {
      prevRef.current = outside;
      onChange(outside);
    }
  });
  return null;
}

// ─── MAIN 3D SCENE ────────────────────────────────────────────────────────────

const DIRECTION_DEFS = [
  {
    pos: [4, 0, 0],
    color: "#DC143C",
    label: "North",
    hebrew: "צפון",
    key: "north",
  },
  {
    pos: [-4, 0, 0],
    color: "#FFD700",
    label: "South",
    hebrew: "דרום",
    key: "south",
  },
  {
    pos: [0, 0, 4],
    color: "#9370DB",
    label: "East",
    hebrew: "מזרח",
    key: "east",
  },
  {
    pos: [0, 0, -3.5],
    color: "#4169E1",
    label: "West",
    hebrew: "מערב",
    key: "west",
  },
  { pos: [0, 4, 0], color: "#FF69B4", label: "Up", hebrew: "מעלה", key: "up" },
  {
    pos: [0, -3, 0],
    color: "#FF8C00",
    label: "Down",
    hebrew: "מטה",
    key: "down",
  },
];

function MainScene({
  onDirectionClick,
  onSpeciesClick,
  onUshpizinClick,
  selectedDirection,
  selectedUshpiz,
  hideLabels,
}) {
  const [cameraOutside, setCameraOutside] = useState(false);
  const effectiveHideLabels = hideLabels || cameraOutside;

  return (
    <>
      <CameraTracker onChange={setCameraOutside} />
      <PerspectiveCamera makeDefault position={[0, 1.5, 13]} fov={58} />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={20}
        maxPolarAngle={Math.PI * 0.84}
        target={[0, 0.5, 0]}
        enablePan={false}
      />

      <Stars
        radius={130}
        depth={60}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={0.7}
      />

      {/* ─── FIXED LIGHTING SETUP ────────────────────────────────────────── */}
      {/* Boosted ambient light with a warm cream tint so your wood tones can actually show through */}
      <ambientLight intensity={0.75} color="#fff1e0" />

      {/* Main warm directional overhead light to cast down on the Sukkah structure */}
      <directionalLight
        castShadow
        position={[10, 12, 8]}
        intensity={1.5}
        color="#fffdf0"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0005}
      />

      {/* Hemisphere sky bounce light for subtle realism */}
      <hemisphereLight
        skyColor="#b4d2ff"
        groundColor="#5c4a3c"
        intensity={0.4}
      />

      {/* Cozy focal accents */}
      <CandleLight />
      <pointLight
        position={[-2, 2, 0]}
        color="#FF7020"
        intensity={0.4}
        distance={10}
      />
      {/* Brightened the overhead point light from dark blue to soft golden-white */}
      <pointLight
        position={[0, 6, 0]}
        color="#FFF5E0"
        intensity={0.5}
        distance={18}
      />
      {/* ────────────────────────────────────────────────────────────────── */}

      {/* Sukkah shell */}
      <SukkahShell />

      {/* Ushpizin on back wall */}
      <UshpizinWall
        onUshpizinClick={onUshpizinClick}
        selectedUshpiz={selectedUshpiz}
      />

      {/* Chassid with daled minim */}
      <ChassidFigure onSpeciesClick={onSpeciesClick} />

      {/* 6 Direction markers */}
      {DIRECTION_DEFS.map((d) => (
        <React.Fragment key={d.key}>
          <DirectionMarker
            position={d.pos}
            color={d.color}
            label={d.label}
            hebrew={d.hebrew}
            onClick={() => onDirectionClick(d.key)}
            isSelected={selectedDirection === d.key}
            hideLabels={effectiveHideLabels}
          />
          <EnergyBeam
            from={[0, 1, 0]}
            to={d.pos}
            color={d.color}
            visible={selectedDirection === d.key}
          />
        </React.Fragment>
      ))}

      {/* Ambient sparkles */}
      <Sparkles
        count={30}
        scale={[10, 6, 10]}
        position={[0, 1, 0]}
        size={1.0}
        speed={0.12}
        color="#FFD700"
      />
    </>
  );
}

// ─── PANEL RENDERING HELPERS ──────────────────────────────────────────────────

function DirectionPanel({ data, onClose }) {
  if (!data) return null;
  return (
    <>
      <button className="panel-close-btn" onClick={onClose}>
        ✕
      </button>
      <div className="panel-header-content">
        <div className="panel-direction-icon">{data.icon}</div>
        <h2 className="panel-title">{data.title}</h2>
        <p className="panel-subtitle">{data.name}</p>
      </div>
      <div className="panel-body">
        <div className="info-card highlight">
          <div className="info-card-title">Sefirah & Divine Name</div>
          <div className="info-card-content">
            <strong>{data.sefirah}</strong>
            <br />
            Divine Name:{" "}
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "var(--panel-color)",
              }}
            >
              {data.divineName}
            </span>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-title">Ushpizin Guest</div>
          <div className="info-card-content">
            <span className="guest-badge">{data.guest}</span>
          </div>
        </div>
        <div className="info-card highlight">
          <div className="info-card-title">Primary Intention</div>
          <div className="info-card-content">"{data.primaryIntention}"</div>
        </div>
        {data.goingOut && (
          <div className="info-card">
            <div className="info-card-title">Going Out (הולכה)</div>
            <div className="info-card-content">{data.goingOut}</div>
          </div>
        )}
        {data.comingIn && (
          <div className="info-card">
            <div className="info-card-title">Coming In (הבאה)</div>
            <div className="info-card-content">{data.comingIn}</div>
          </div>
        )}
        {data.threeLevels && (
          <div className="info-card">
            <div className="info-card-title">Three Levels of Yirah</div>
            <div className="info-card-content">{data.threeLevels}</div>
          </div>
        )}
        {data.devekut && (
          <div className="info-card">
            <div className="info-card-title">The Nature of Devekut</div>
            <div className="info-card-content">{data.devekut}</div>
          </div>
        )}
        {data.twoPaths && (
          <div className="info-card">
            <div className="info-card-title">Two Primary Paths</div>
            <div className="info-card-content">{data.twoPaths}</div>
          </div>
        )}
        {data.covenant && (
          <div className="info-card">
            <div className="info-card-title">The Nature of Brit</div>
            <div className="info-card-content">{data.covenant}</div>
          </div>
        )}
        {data.completeForm && (
          <div className="info-card">
            <div className="info-card-title">The Complete Jewish Form</div>
            <div className="info-card-content">{data.completeForm}</div>
          </div>
        )}
        {data.primaryTest && (
          <div className="info-card">
            <div className="info-card-title">The Primary Test</div>
            <div className="info-card-content">{data.primaryTest}</div>
          </div>
        )}
        {data.powerOfMemory && (
          <div className="info-card">
            <div className="info-card-title">Power of Memory</div>
            <div className="info-card-content">{data.powerOfMemory}</div>
          </div>
        )}
        {data.whatToRemember && (
          <div className="info-card">
            <div className="info-card-title">What to Remember</div>
            <div className="info-card-content">{data.whatToRemember}</div>
          </div>
        )}
        {data.mosheExample && (
          <div className="info-card">
            <div className="info-card-title">Moshe's Example</div>
            <div className="info-card-content">{data.mosheExample}</div>
          </div>
        )}
        {data.twoAspects && (
          <div className="info-card">
            <div className="info-card-title">Two Aspects of Hod</div>
            <div className="info-card-content">{data.twoAspects}</div>
          </div>
        )}
        {data.essenceOfHod && (
          <div className="info-card">
            <div className="info-card-title">The Essence of Hod</div>
            <div className="info-card-content">{data.essenceOfHod}</div>
          </div>
        )}
        <div className="info-card highlight">
          <div className="info-card-title">Meditation</div>
          <div className="info-card-content">{data.meditation}</div>
        </div>
        <div className="info-card mystical">
          <div className="info-card-title">Mystical Aspect</div>
          <div className="info-card-content">{data.mystical}</div>
        </div>
        {data.practical && (
          <div className="info-card">
            <div className="info-card-title">Practical Applications</div>
            <div className="info-card-content">{data.practical}</div>
          </div>
        )}
        {data.elevation && (
          <div className="info-card">
            <div className="info-card-title">Elevation from Fallen Love</div>
            <div className="info-card-content">{data.elevation}</div>
          </div>
        )}
        {data.caution && (
          <div className="info-card">
            <div className="info-card-title">Caution</div>
            <div className="info-card-content">{data.caution}</div>
          </div>
        )}
        <div className="info-card">
          <div className="info-card-title">Spiritual Effect</div>
          <div className="info-card-content">{data.effect}</div>
        </div>
      </div>
    </>
  );
}

function SpeciesPanel({ data, onClose }) {
  if (!data) return null;
  return (
    <>
      <button className="panel-close-btn" onClick={onClose}>
        ✕
      </button>
      <div className="panel-header-content">
        <div className="panel-direction-icon">🌿</div>
        <h2 className="panel-title">{data.name}</h2>
        <p className="panel-subtitle">{data.title}</p>
      </div>
      <div className="panel-body">
        {data.letter && (
          <div className="info-card highlight">
            <div className="info-card-title">Divine Letter</div>
            <div
              className="info-card-content"
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {data.letter}
            </div>
          </div>
        )}
        <div className="info-card mystical">
          <div className="info-card-title">Mystical Understanding</div>
          <div className="info-card-content">{data.content}</div>
        </div>
        {data.gematria && (
          <div className="info-card highlight">
            <div className="info-card-title">Gematria & Life</div>
            <div className="info-card-content">{data.gematria}</div>
          </div>
        )}
        {data.anatomy && (
          <div className="info-card">
            <div className="info-card-title">Human Anatomy</div>
            <div className="info-card-content">{data.anatomy}</div>
          </div>
        )}
        {data.perception && (
          <div className="info-card">
            <div className="info-card-title">Spiritual Perception</div>
            <div className="info-card-content">{data.perception}</div>
          </div>
        )}
        {data.precedence && (
          <div className="info-card highlight">
            <div className="info-card-title">Torah Precedence — נעשה ונשמע</div>
            <div className="info-card-content">{data.precedence}</div>
          </div>
        )}
        {data.malchut && (
          <div className="info-card mystical">
            <div className="info-card-title">Malchut — Unifying All Worlds</div>
            <div className="info-card-content">{data.malchut}</div>
          </div>
        )}
        {data.rectification && (
          <div className="info-card">
            <div className="info-card-title">Rectifying Original Sin</div>
            <div className="info-card-content">{data.rectification}</div>
          </div>
        )}
        {data.mechanics && (
          <div className="info-card">
            <div className="info-card-title">
              Mystical Mechanics — הולכה והבאה
            </div>
            <div className="info-card-content">{data.mechanics}</div>
          </div>
        )}
        {data.soul && (
          <div className="info-card mystical">
            <div className="info-card-title">The Soul's Perception</div>
            <div className="info-card-content">{data.soul}</div>
          </div>
        )}
        {data.patriarchs && (
          <div className="info-card">
            <div className="info-card-title">
              Descent of Patriarchal Holiness
            </div>
            <div className="info-card-content">{data.patriarchs}</div>
          </div>
        )}
        {data.pattern && (
          <div className="info-card">
            <div className="info-card-title">Sacred Pattern — תלת גו תלת</div>
            <div className="info-card-content">{data.pattern}</div>
          </div>
        )}
        {data.seventy && (
          <div className="info-card highlight">
            <div className="info-card-title">The Seventy Nations</div>
            <div className="info-card-content">{data.seventy}</div>
          </div>
        )}
        {data.awakening && (
          <div className="info-card mystical">
            <div className="info-card-title">Cosmic Awakening</div>
            <div className="info-card-content">{data.awakening}</div>
          </div>
        )}
        {data.unity && (
          <div className="info-card">
            <div className="info-card-title">Unity of Israel</div>
            <div className="info-card-content">{data.unity}</div>
          </div>
        )}
        {data.treeOfLife && (
          <div className="info-card highlight">
            <div className="info-card-title">Touching the Tree of Life</div>
            <div className="info-card-content">{data.treeOfLife}</div>
          </div>
        )}
        {data.symbolism && (
          <div className="info-card">
            <div className="info-card-title">Symbolism</div>
            <div className="info-card-content">{data.symbolism}</div>
          </div>
        )}
        <div className="info-card">
          <div className="info-card-title">Practical Application</div>
          <div className="info-card-content">{data.practice}</div>
        </div>
      </div>
    </>
  );
}

function UshpizinPanel({ data, onClose }) {
  if (!data) return null;
  return (
    <>
      <button className="panel-close-btn" onClick={onClose}>
        ✕
      </button>
      <div className="panel-header-content">
        <div className="panel-direction-icon">{data.icon}</div>
        <h2 className="panel-title">{data.name}</h2>
        <p className="panel-subtitle">{data.hebrew}</p>
        <p
          className="panel-subtitle"
          style={{ marginTop: "4px", fontSize: "0.95rem" }}
        >
          Day {data.day} — {data.sefirah}
        </p>
      </div>
      <div className="panel-body">
        {data.teachings.map((t, i) => (
          <div
            key={i}
            className={`info-card ${
              i === 0 ? "highlight" : i === 2 ? "mystical" : ""
            }`}
          >
            <div className="info-card-title">{t.title}</div>
            <div className="info-card-content">{t.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function SukkahScenePage() {
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedUshpiz, setSelectedUshpiz] = useState(null);

  const anyOpen = selectedDirection || selectedSpecies || selectedUshpiz;

  const dirData = selectedDirection ? DIRECTIONS_INFO[selectedDirection] : null;
  const specData = selectedSpecies ? SPECIES_INFO[selectedSpecies] : null;
  const ushpizData = selectedUshpiz
    ? USHPIZIN.find((u) => u.key === selectedUshpiz)
    : null;

  return (
    <div
      className="experience-container"
      style={{
        background:
          "linear-gradient(160deg, #0a1628 0%, #0f2d1a 40%, #0a1628 100%)",
      }}
    >
      <Link to="/" className="back-button">
        ← Back to Kavanos
      </Link>

      <div className="header-3d">
        <h1
          style={{
            color: "#FFD700",
            textShadow:
              "0 0 20px rgba(255,180,0,0.6), 0 0 40px rgba(255,140,0,0.3)",
          }}
        >
          🏕️ The Sacred Sukkah — Daled Minim Experience 🌿
        </h1>
        <p className="subtitle">
          Drag to rotate · Scroll to zoom · Click to explore
        </p>
      </div>

      <div style={{ width: "100%", height: "72vh" }}>
        <Canvas shadows>
          <Suspense fallback={null}>
            <MainScene
              onDirectionClick={setSelectedDirection}
              onSpeciesClick={setSelectedSpecies}
              onUshpizinClick={setSelectedUshpiz}
              selectedDirection={selectedDirection}
              selectedUshpiz={selectedUshpiz}
              hideLabels={!!anyOpen}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="instructions">
        <p>
          ✦ Click the <strong>6 glowing diamonds</strong> for each direction's
          kavana &nbsp;·&nbsp; 🌿 Click the{" "}
          <strong>Chassid's Daled Minim</strong> to explore each species
          &nbsp;·&nbsp; ✨ Orbit left to click the <strong>7 Ushpizin medallions</strong>{" "}
          on the outer left wall
        </p>
      </div>

      {/* Shared overlay */}
      <div
        className={`panel-overlay ${anyOpen ? "active" : ""}`}
        onClick={() => {
          setSelectedDirection(null);
          setSelectedSpecies(null);
          setSelectedUshpiz(null);
        }}
      />

      {/* Direction panel */}
      <div
        className={`info-slide-panel ${selectedDirection ? "open" : ""}`}
        style={{
          "--panel-color": dirData?.color ?? "#FFD700",
          "--panel-color-dark": dirData?.colorDark ?? "#DAA520",
          "--panel-color-glow": dirData ? `${dirData.color}80` : "#FFD70080",
        }}
      >
        {dirData && (
          <DirectionPanel
            data={dirData}
            onClose={() => setSelectedDirection(null)}
          />
        )}
      </div>

      {/* Species panel */}
      <div
        className={`info-slide-panel species-info-panel ${
          selectedSpecies ? "open" : ""
        }`}
        style={{
          "--panel-color": "#7cb342",
          "--panel-color-dark": "#558b2f",
          "--panel-color-glow": "rgba(124,179,66,0.6)",
        }}
      >
        {specData && (
          <SpeciesPanel
            data={specData}
            onClose={() => setSelectedSpecies(null)}
          />
        )}
      </div>

      {/* Ushpizin panel */}
      <div
        className={`info-slide-panel ${selectedUshpiz ? "open" : ""}`}
        style={{
          "--panel-color": ushpizData?.color ?? "#FFD700",
          "--panel-color-dark": ushpizData?.colorDark ?? "#B8860B",
          "--panel-color-glow": ushpizData
            ? `${ushpizData.color}80`
            : "#FFD70080",
        }}
      >
        {ushpizData && (
          <UshpizinPanel
            data={ushpizData}
            onClose={() => setSelectedUshpiz(null)}
          />
        )}
      </div>
    </div>
  );
}
