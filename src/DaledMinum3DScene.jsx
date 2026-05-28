import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stars,
  Text3D,
  Center,
  MeshDistortMaterial,
  Float,
  Sparkles,
  Html,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./DaledMinum3D.css";
import "./InfoPanel.css";

// Chassid Figure Component
function ChassidFigure({ onClick }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 2.5, 0]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#f5d5b8" />
        </mesh>

        {/* Hat */}
        <mesh position={[0, 2.9, 0]} castShadow>
          <cylinderGeometry args={[0.38, 0.35, 0.4, 32]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Beard */}
        <mesh position={[0, 2.2, 0.15]} castShadow>
          <boxGeometry args={[0.4, 0.3, 0.2]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>

        {/* Body */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.4, 0.5, 1.8, 32]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>

        {/* White shirt */}
        <mesh position={[0, 1.6, 0.35]} castShadow>
          <boxGeometry args={[0.3, 0.6, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.5, 1.3, 0]} castShadow rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
        <mesh position={[0.5, 1.3, 0]} castShadow rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>

        {/* Lulav - tall palm branch */}
        <group position={[0, 1.2, 0.4]}>
          <mesh castShadow onClick={() => onClick("lulav")}>
            <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
            <meshStandardMaterial color="#8b7355" />
          </mesh>
          {/* Palm leaves at top */}
          <mesh position={[0, 1.1, 0]} castShadow>
            <coneGeometry args={[0.2, 0.5, 8]} />
            <meshStandardMaterial color="#7cb342" />
          </mesh>
        </group>

        {/* Etrog - glowing citron */}
        <mesh position={[0.4, 0.9, 0.5]} castShadow onClick={() => onClick("etrog")}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#fdd835"
            emissive="#fdd835"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Hadassim - myrtle branches (left and right) */}
        <mesh position={[-0.2, 1.4, 0.45]} castShadow onClick={() => onClick("hadassim")}>
          <cylinderGeometry args={[0.08, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#4caf50" />
        </mesh>
        <mesh position={[0.2, 1.4, 0.45]} castShadow onClick={() => onClick("hadassim")}>
          <cylinderGeometry args={[0.08, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#4caf50" />
        </mesh>

        {/* Aravot - willow */}
        <mesh position={[-0.3, 1.5, 0.4]} castShadow onClick={() => onClick("aravot")}>
          <cylinderGeometry args={[0.06, 0.04, 0.8, 8]} />
          <meshStandardMaterial color="#81c784" />
        </mesh>

        {/* Sparkles around the figure */}
        <Sparkles count={50} scale={3} size={2} speed={0.4} color="#ffd700" />
      </group>
    </Float>
  );
}

// Direction Marker Component
function DirectionMarker({ position, color, label, hebrew, onClick, isSelected, hideLabels }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered || isSelected) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh
          ref={meshRef}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
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

        {/* Glowing ring around marker */}
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

        {/* Label - hide when panels are open */}
        {!hideLabels && (
          <Html distanceFactor={10}>
            <div style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              textAlign: 'center',
              pointerEvents: 'none',
              textShadow: '0 0 10px rgba(0,0,0,0.8)',
              whiteSpace: 'nowrap'
            }}>
              <div>{label}</div>
              <div style={{ fontSize: '16px', marginTop: '3px' }}>{hebrew}</div>
            </div>
          </Html>
        )}

        {/* Particles emanating from marker */}
        {(hovered || isSelected) && (
          <Sparkles count={20} scale={2} size={1.5} speed={0.3} color={color} />
        )}
      </Float>
    </group>
  );
}

// Particle beam effect
function EnergyBeam({ from, to, color, visible }) {
  if (!visible) return null;

  const points = [];
  points.push(new THREE.Vector3(...from));
  points.push(new THREE.Vector3(...to));

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color={color} linewidth={3} transparent opacity={0.6} />
    </line>
  );
}

// Main 3D Scene Component
function Scene3D({ onDirectionClick, onSpeciesClick, selectedDirection, hideLabels }) {
  const directions = [
    { pos: [4, 0, 0], color: "#FFD700", label: "South", hebrew: "דרום", key: "south" },
    { pos: [-4, 0, 0], color: "#DC143C", label: "North", hebrew: "צפון", key: "north" },
    { pos: [0, 0, 4], color: "#9370DB", label: "East", hebrew: "מזרח", key: "east" },
    { pos: [0, 0, -4], color: "#4169E1", label: "West", hebrew: "מערב", key: "west" },
    { pos: [0, 4, 0], color: "#FF69B4", label: "Up", hebrew: "מעלה", key: "up" },
    { pos: [0, -3, 0], color: "#FF8C00", label: "Down", hebrew: "מטה", key: "down" },
  ];

  return (
    <>
      <PerspectiveCamera makeDefault position={[8, 5, 8]} />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={20}
        enablePan={false}
      />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.6}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Chassid Figure */}
      <ChassidFigure onClick={onSpeciesClick} />

      {/* Direction Markers */}
      {directions.map((dir) => (
        <React.Fragment key={dir.key}>
          <DirectionMarker
            position={dir.pos}
            color={dir.color}
            label={dir.label}
            hebrew={dir.hebrew}
            onClick={() => onDirectionClick(dir.key)}
            isSelected={selectedDirection === dir.key}
            hideLabels={hideLabels}
          />
          {/* Energy beam when selected */}
          <EnergyBeam
            from={[0, 1, 0]}
            to={dir.pos}
            color={dir.color}
            visible={selectedDirection === dir.key}
          />
        </React.Fragment>
      ))}

      {/* Floor grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.4}
        />
      </mesh>

      {/* Circular platform under chassid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.99, 0]}>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

// Main Component
export default function DaledMinum3DScene() {
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const directionsInfo = {
    south: {
      name: "South (דרום)",
      title: "Right - Chesed",
      icon: "→",
      color: "#FFD700",
      colorDark: "#DAA520",
      sefirah: "Chesed (Loving-kindness) - אברהם אבינו",
      guest: "Avraham Avinu",
      divineName: "יֶהֶוֶהֶ",
      essence: "Divine Love & Expansion",
      primaryIntention: "Let divine love flow through me to awaken authentic love for Hashem, Torah, and all of Israel.",
      goingOut: "Contemplate how everything in creation is השפעת אור השי\"ת - the influence of divine light. See Hashem's personal influence upon you, both in your essential existence and in every detail.",
      comingIn: "Draw this recognition into אהבת ה' בכל לב - complete love of Hashem with all your heart. Feel your heart opening to divine love.",
      meditation: "Focus on the divine name יֶהֶוֶהֶ, arousing flames of divine love in your heart. Raise Chesed to its root in Da'at. Elevate personal love toward Hashem above worldly desires. Focus on divine kindness flowing from the right side - the side of giving and expansion.",
      mystical: "Connect to the primordial light of creation, drawing from the infinite compassion of Ein Sof. Bring this light into Malchut, inspiring love and devotion. Pray for mercy, forgiveness, and abundance of kindness from Above.",
      practical: "Study Torah from a place of love rather than obligation • Practice chesed with others, recognizing that everything belongs to Hashem • Cultivate אהבת ישראל by seeing every Jew as חלק אלוה ממעל ממש • Remove complaints against others by understanding that everything comes from Hashem for your good",
      elevation: "Transform any physical attractions by recognizing that what truly attracts you is the divine spark within all things. There is no true pleasure or benefit except in delighting in Hashem and His love.",
      effect: "Hearts opened to receive divine love and to give it to others.",
    },
    north: {
      name: "North (צפון)",
      title: "Left - Gevurah",
      icon: "←",
      color: "#DC143C",
      colorDark: "#8B0000",
      sefirah: "Gevurah (Divine Strength) - יצחק אבינו",
      guest: "Yitzchak Avinu",
      divineName: "יְהְוְהְ",
      essence: "Divine Strength & Boundaries",
      primaryIntention: "Strengthen me with proper fear of Heaven - not fear of people or worldly things, but awe of the Divine.",
      threeLevels: "יראת העונש (Fear of Punishment): Strengthen knowledge that 'there is a judge and there is judgment' • יראת חטא (Fear of Sin): Fear transgression itself because it distances you from Hashem, the source of life • יראת הרוממות (Fear of Exaltedness): Contemplate His greatness and enter into awe from the height of His awesome majesty",
      meditation: "Focus on the divine name יְהְוְהְ, arousing tremendous awe of Hashem. Raise Gevurah to its root in Da'at. Elevate fear of Hashem above fear of people or the physical world. Focus on divine strength and boundaries - the ability to say 'no' to evil.",
      mystical: "Gevurah is the power of צמצום (divine contraction) - the root of all lower world existence. Through tzimtzum, 'space' was created for our world and our choices, giving meaning to reward and punishment. Channel the contracting force that creates vessels for divine light.",
      practical: "Don't fear anything in the world except Hashem • Remember: 'I am ashamed before my Creator that He should see me fearing something other than Him' • Use fear to move away from transgression, but not to bring sadness - if you try with all your strength, 'הקב\"ה doesn't come with complaints against His creatures'",
      effect: "Inner strength to overcome spiritual challenges and maintain boundaries. Empower the soul to resist the yetzer hara and avoid sin.",
    },
    east: {
      name: "East (מזרח)",
      title: "Forward - Tiferet",
      icon: "↑",
      color: "#9370DB",
      colorDark: "#663399",
      sefirah: "Tiferet (Divine Beauty) - יעקב אבינו",
      guest: "Yaakov Avinu",
      divineName: "יֹהֹוֹהֹ",
      essence: "Divine Beauty & Balance",
      primaryIntention: "Help me feel truly connected to You, Hashem, experiencing devekut - divine attachment - in every moment.",
      devekut: "Unlike chesed (love from a distance), devekut is feeling a soul connection like glue joining two things. True connection requires both to be present together - feeling Hashem's greatness (chesed) combined with sensing His immediate presence (gevurah).",
      twoPaths: "Torah Study in Holiness: Learn with recognition that Torah is עצמותו אורו ית' - His essential light. Intend while learning to cleave to Hashem, who is the inner essence hidden in every word of Torah • Speaking with Hashem: Get used to pouring out your heart before Hashem, requesting everything from Him and thanking Him for everything. This trains you to live with Hashem and feel His existence with you.",
      meditation: "Focus on the divine name יֹהֹוֹהֹ, feeling the harmony between chesed and gevurah. Raise Tiferet to its root in Da'at. Align with the beauty of Torah and mitzvot rather than seeking worldly approval. Focus on harmony between Chesed and Gevurah.",
      mystical: "The human realm (מה - 'what?') seeking to understand divine beauty. Beautify service to Hashem. Pray for spiritual renewal to shine on all Israel.",
      practical: "Include everything that happens in your devekut by understanding that Hashem does everything • See every occurrence as a 'bat kol' - divine voice - informing you of Hashem's will • Flee from anything that damages devekut, especially pride, about which it's said 'I and he cannot dwell in one dwelling'",
      effect: "Balance and harmony in spiritual practice and daily life.",
    },
    west: {
      name: "West (מערב)",
      title: "Back - Yesod",
      icon: "↓",
      color: "#4169E1",
      colorDark: "#1E3A8A",
      sefirah: "Yesod (Foundation) - יוסף הצדיק",
      guest: "Yosef HaTzaddik",
      divineName: "יוּהוּווּהוּ",
      essence: "Holy Foundation & Connection",
      primaryIntention: "Keep me faithful and connected to You in all circumstances, pure in my intentions and desires.",
      covenant: "Yesod involves התקשרות והתחברות - remaining connected to Hashem even without feeling devekut. From memory of connection, continue practically to remain bound to Hashem in every situation.",
      completeForm: "All your actions, words, and thoughts revolve only around Hashem. Anything not related to this doesn't interest you. You derive pleasure only from holiness and remain faithful to Hashem, not taking any pleasure that kelipot offer.",
      primaryTest: "The main test of faithfulness involves pleasures of this world. Kelipot try to seduce by showing apparent pleasures, but one who connects only to Hashem merits enormous spiritual pleasure and feels taste in connection with Hashem, Torah, tefilah, Shabbat, and all spiritual matters.",
      spearheadBattle: "The most known desire is 'חוד החנית' - the spearpoint of the battle. Here maximum power is given to both sides. Victory here brings the greatest spiritual pleasure and connection.",
      meditation: "Focus on the divine name יוּהוּווּהוּ, establishing purity and holy connection. Raise Yesod to its root in Da'at. Form holy connections with righteous individuals. Dedicate oneself fully to Hashem's service with purity of intent.",
      mystical: "The channel through which all upper lights flow to Malchut.",
      practical: "Sanctify even permitted physical pleasures according to Hashem's will • Flee from anything that connects you to evil • In every pleasure, connect to the divine spark rather than the external form • Remember: the foundation of everything is to whom you're connected and where you find your vitality",
      effect: "Strong foundation for spiritual growth and connection to the community of Israel.",
    },
    up: {
      name: "Up (מעלה)",
      title: "Above - Netzach",
      icon: "⬆",
      color: "#FF69B4",
      colorDark: "#C71585",
      sefirah: "Netzach (Eternal Victory) - משה רבינו",
      guest: "Moshe Rabbeinu",
      divineName: "יִהִוִהִ",
      essence: "Eternal Victory & Persistence",
      primaryIntention: "Give me strength to overcome spiritual obstacles and persist even when I don't feel inspired.",
      powerOfMemory: "Even when you don't have 'מוחין' (divine consciousness) and don't feel alive love of Hashem in your heart, stand strong to overcome the yetzer hara through memory of truth you've already felt.",
      whatToRemember: "Hashem's love toward you • Your love toward Hashem • The covenant of love made with you • Your commitment to remain faithful even without feeling vitality",
      meditation: "Focus on the divine name יִהִוִהִ, channeling divine persistence and victory. Raise Netzach to its root in Da'at. Focus on overcoming the yetzer hara and achieving victory in spiritual matters. Channel energy toward eternal goals.",
      mystical: "Netzach operates למעלה מטעם ודעת - above reason and knowledge. Sometimes you must persist with holy stubbornness even when logic doesn't support you, trusting in the higher purpose. Victory corresponds to the right column's extension upward.",
      mosheExample: "Though Moshe achieved the highest levels of דעת, he's associated with netzach because of the tremendous trials he underwent before age 80, standing firm through all of them. No one can reach high levels without literally overcoming and conquering through netzach.",
      caution: "Don't misuse this trait for stubbornness in wrong directions. If Heaven is clearly blocking something you've started, withdraw your hand in honor of your Creator rather than persisting from ego.",
      practical: "Instill perseverance and triumph over challenges. Pray for success in both spiritual and material endeavors.",
      effect: "Persistent spiritual strength and divine assistance in challenges.",
    },
    down: {
      name: "Down (מטה)",
      title: "Below - Hod",
      icon: "⬇",
      color: "#FF8C00",
      colorDark: "#FF6347",
      sefirah: "Hod (Acknowledgment) - אהרן הכהן",
      guest: "Aharon HaKohen",
      divineName: "יֻהֻוֻהֻ",
      essence: "Acknowledgment & Gratitude",
      primaryIntention: "Let me truly recognize that everything comes from You and constantly give thanks.",
      twoAspects: "Acknowledgment of Hidden Reality: Acknowledge Hashem's existence even when you don't feel Him, based on memory of what you previously experienced • Gratitude and Recognition: Thank and praise for all the good Hashem has given, recognizing that everything comes from Him alone.",
      essenceOfHod: "Acknowledging what isn't visible to the eyes - recognizing inner reality. When you 'live' this awareness, you see Hashem's hand in everything without attributing anything to natural causes.",
      externalBeauty: "Hod includes חסד הניתן על פני חתן - the kindness given upon a groom's face. True צדיקים have faces that shine with supernal hod covering them, reflecting their inner spiritual beauty.",
      meditation: "Focus on the divine name יֻהֻוֻהֻ, cultivating gratitude and acknowledgment of the Divine. Raise Hod to its root in Da'at. Cultivate gratitude to Hashem for His kindness, recognizing His gifts in every moment. Submit to divine will.",
      mystical: "Acknowledge divine sovereignty and our dependence on His grace.",
      practical: "Give praise for everything that happens, knowing all good comes from Hashem • Even acknowledge apparent difficulties as good, knowing everything is for your benefit • Avoid false external beauty that lacks inner substance • Don't be impressed by others who have superficial beauty without inner content",
      effect: "Heart filled with appreciation and humble recognition of divine gifts.",
    },
  };

  const speciesInfo = {
    lulav: {
      name: "Lulav (לולב)",
      title: "The Palm Branch - Spine of Connection",
      content: "The lulav represents your spinal column - the channel connecting mind and heart, brain and body. Shaped like the letter ו (vav), it serves as a pillar connecting heaven and earth. The word לולב equals חיים (life) in gematria - you are literally grasping eternal life!"
    },
    etrog: {
      name: "Etrog (אתרוג)",
      title: "The Citron - Heart of Unity",
      content: "The etrog is unique - the only fruit where the tree and fruit taste the same, rectifying the primordial sin. It has both ריח וטעם (fragrance and taste), representing the integration of all worlds necessary for divine awe."
    },
    hadassim: {
      name: "Hadassim (הדסים)",
      title: "The Myrtles - Eyes of the Patriarchs",
      content: "The three hadassim represent the three Patriarchs whose holiness descends through joy to the lowest levels. Has fragrance without taste, representing the upper worlds whose perception is transcendent."
    },
    aravot: {
      name: "Aravot (ערבות)",
      title: "The Willows - Voice of Unity",
      content: "Willows have neither taste nor fragrance, yet are bound together showing that no one should despair. Represents the spreading of divine unity into all seventy languages and nations."
    },
  };

  const handleDirectionClick = (direction) => {
    setSelectedDirection(direction);
  };

  const handleSpeciesClick = (species) => {
    setSelectedSpecies(species);
  };

  return (
    <div className="experience-container">
      <Link to="/" className="back-button">
        ← Back to Kavanos
      </Link>

      <div className="header-3d">
        <h1>🌿 Interactive 3D Daled Minim Experience 🌿</h1>
        <p className="subtitle">
          Drag to rotate • Scroll to zoom • Click markers to explore
        </p>
      </div>

      <div style={{ width: '100%', height: '70vh' }}>
        <Canvas shadows>
          <Suspense fallback={null}>
            <Scene3D
              onDirectionClick={handleDirectionClick}
              onSpeciesClick={handleSpeciesClick}
              selectedDirection={selectedDirection}
              hideLabels={selectedDirection || selectedSpecies}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="instructions">
        <p>🎮 <strong>Controls:</strong> Drag to rotate view • Scroll to zoom • Click glowing markers for direction info • Click Daled Minim for species info</p>
      </div>

      {/* Overlay */}
      <div
        className={`panel-overlay ${selectedDirection || selectedSpecies ? 'active' : ''}`}
        onClick={() => {
          setSelectedDirection(null);
          setSelectedSpecies(null);
        }}
      />

      {/* Direction Info Sliding Panel */}
      <div
        className={`info-slide-panel ${selectedDirection ? 'open' : ''}`}
        style={{
          '--panel-color': selectedDirection ? directionsInfo[selectedDirection]?.color : '#FFD700',
          '--panel-color-dark': selectedDirection ? directionsInfo[selectedDirection]?.colorDark : '#DAA520',
          '--panel-color-glow': selectedDirection ? `${directionsInfo[selectedDirection]?.color}80` : '#FFD70080',
        }}
      >
        {selectedDirection && directionsInfo[selectedDirection] && (
          <>
            <button className="panel-close-btn" onClick={() => setSelectedDirection(null)}>
              ✕
            </button>

            <div className="panel-header-content">
              <div className="panel-direction-icon">
                {directionsInfo[selectedDirection].icon}
              </div>
              <h2 className="panel-title">{directionsInfo[selectedDirection].title}</h2>
              <p className="panel-subtitle">{directionsInfo[selectedDirection].name}</p>
            </div>

            <div className="panel-body">
              <div className="info-card">
                <div className="info-card-title">Sefirah & Divine Name</div>
                <div className="info-card-content">
                  <strong>{directionsInfo[selectedDirection].sefirah}</strong>
                  <br/>
                  Divine Name: <span style={{fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--panel-color)'}}>{directionsInfo[selectedDirection].divineName}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-title">Ushpizin Guest</div>
                <div className="info-card-content">
                  <span className="guest-badge">{directionsInfo[selectedDirection].guest}</span>
                </div>
              </div>

              <div className="info-card highlight">
                <div className="info-card-title">Primary Intention</div>
                <div className="info-card-content">"{directionsInfo[selectedDirection].primaryIntention}"</div>
              </div>

              {directionsInfo[selectedDirection].goingOut && (
                <div className="info-card">
                  <div className="info-card-title">Going Out (הולכה)</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].goingOut}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].comingIn && (
                <div className="info-card">
                  <div className="info-card-title">Coming In (הבאה)</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].comingIn}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].threeLevels && (
                <div className="info-card">
                  <div className="info-card-title">Three Levels of Yirah</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].threeLevels}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].devekut && (
                <div className="info-card">
                  <div className="info-card-title">The Nature of Devekut</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].devekut}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].twoPaths && (
                <div className="info-card">
                  <div className="info-card-title">Two Primary Paths</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].twoPaths}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].powerOfMemory && (
                <div className="info-card">
                  <div className="info-card-title">Power of Memory</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].powerOfMemory}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].whatToRemember && (
                <div className="info-card">
                  <div className="info-card-title">What to Remember</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].whatToRemember}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].mosheExample && (
                <div className="info-card">
                  <div className="info-card-title">Moshe's Example</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].mosheExample}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].twoAspects && (
                <div className="info-card">
                  <div className="info-card-title">Two Aspects of Hod</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].twoAspects}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].essenceOfHod && (
                <div className="info-card">
                  <div className="info-card-title">The Essence of Hod</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].essenceOfHod}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].covenant && (
                <div className="info-card">
                  <div className="info-card-title">The Nature of Brit (Covenant)</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].covenant}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].completeForm && (
                <div className="info-card">
                  <div className="info-card-title">The Complete Jewish Form</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].completeForm}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].primaryTest && (
                <div className="info-card">
                  <div className="info-card-title">The Primary Test</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].primaryTest}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].spearheadBattle && (
                <div className="info-card">
                  <div className="info-card-title">The Spearhead Battle</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].spearheadBattle}</div>
                </div>
              )}

              <div className="info-card highlight">
                <div className="info-card-title">Meditation</div>
                <div className="info-card-content">{directionsInfo[selectedDirection].meditation}</div>
              </div>

              <div className="info-card mystical">
                <div className="info-card-title">Mystical Aspect</div>
                <div className="info-card-content">{directionsInfo[selectedDirection].mystical}</div>
              </div>

              {directionsInfo[selectedDirection].practical && (
                <div className="info-card">
                  <div className="info-card-title">Practical Applications</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].practical}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].elevation && (
                <div className="info-card">
                  <div className="info-card-title">Elevation from Fallen Love</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].elevation}</div>
                </div>
              )}

              {directionsInfo[selectedDirection].caution && (
                <div className="info-card">
                  <div className="info-card-title">Caution</div>
                  <div className="info-card-content">{directionsInfo[selectedDirection].caution}</div>
                </div>
              )}

              <div className="info-card">
                <div className="info-card-title">Spiritual Effect</div>
                <div className="info-card-content">{directionsInfo[selectedDirection].effect}</div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Species Info Sliding Panel */}
      <div
        className={`info-slide-panel species-info-panel ${selectedSpecies ? 'open' : ''}`}
        style={{
          '--panel-color': '#7cb342',
          '--panel-color-dark': '#558b2f',
          '--panel-color-glow': 'rgba(124, 179, 66, 0.6)',
        }}
      >
        {selectedSpecies && speciesInfo[selectedSpecies] && (
          <>
            <button className="panel-close-btn" onClick={() => setSelectedSpecies(null)}>
              ✕
            </button>

            <div className="panel-header-content">
              <div className="panel-direction-icon">
                🌿
              </div>
              <h2 className="panel-title">{speciesInfo[selectedSpecies].name}</h2>
              <p className="panel-subtitle">{speciesInfo[selectedSpecies].title}</p>
            </div>

            <div className="panel-body">
              <div className="info-card mystical">
                <div className="info-card-title">Mystical Understanding</div>
                <div className="info-card-content">{speciesInfo[selectedSpecies].content}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
