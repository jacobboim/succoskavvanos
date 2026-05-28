import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DaledMinum3D.css";

const DaledMinum3D = () => {
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const speciesInfo = {
    lulav: {
      name: "Lulav (לולב)",
      title: "The Palm Branch",
      letter: "ו (Vav)",
      represents: "The spine and backbone - connecting heaven and earth",
      symbolism: "The tzaddik (righteous person) who embodies 'כי כל בשמים ובארץ' - 'for all is in heaven and earth'",
      mystical: "The lulav represents your spinal column - the channel connecting mind and heart, brain and body. Shaped like the letter ו (vav), it serves as a pillar connecting heaven and earth. The word לולב can be read as 'לו לב' - 'to Him the heart', teaching that its primary purpose is subjugating your heart to Hashem.",
      gematria: "לולב equals חיים (life) in gematria - you are literally grasping eternal life, the Tree of Life itself.",
      anatomy: "Corresponds to the spine in human anatomy",
      taste: "Has taste but not fragrance (טעם ולא ריח) - representing tangible perception for those in the lower worlds",
      practical: "When you raise and lower it, you create a flow of divine consciousness from your intellect down through your spine into your heart, then spreading to all your limbs.",
    },
    etrog: {
      name: "Etrog (אתרוג)",
      title: "The Citron Fruit",
      letter: "ה (Hey - Final)",
      represents: "The heart and Malchut (Divine Kingship)",
      symbolism: "Represents the integration of all worlds and Jewish souls who have both Torah and good deeds",
      mystical: "The etrog is unique - the only fruit where the tree and fruit taste the same, rectifying the primordial sin when Earth failed to make trees taste like their fruit. It has both ריח וטעם (fragrance and taste), representing the integration of all worlds necessary for יראה (divine awe).",
      precedence: "By mentioning the etrog first among the Four Species, the Torah reveals the power of 'נעשה ונשמע' - doing before understanding. When you lift the etrog before the other species, you demonstrate Israel's unique ability to act from pure faith.",
      anatomy: "Corresponds to the heart in human anatomy",
      practical: "Imagine the etrog as your heart - each wave draws חסד (divine kindness) from the transcendent level into your heart, which then flows to all corresponding limbs.",
      unity: "Creates reverent awareness that unifies transcendent perception (fragrance) with immanent perception (taste).",
    },
    hadassim: {
      name: "Hadassim (הדסים)",
      title: "The Myrtle Branches",
      letter: "י (Yud)",
      represents: "The eyes and the three Patriarchs",
      symbolism: "Jewish souls who have good deeds but limited Torah study",
      mystical: "The three hadassim represent the three Patriarchs whose holiness descends through joy to the lowest levels. Has ריח ולא טעם (fragrance without taste), representing דרי מעלה (upper worlds) whose perception is subtle and transcendent, beyond physical grasp.",
      fragrance: "The Sages taught that the נשמה (soul) benefits only from ריח (fragrance) because הנשמה היא בחינת דרי מעלה - the soul is of the aspect of upper worlds. Fragrance represents what cannot be grasped or seen - transcendent perception beyond physical grasp.",
      anatomy: "Corresponds to the eyes in human anatomy",
      practical: "When you shake toward different directions, you're drawing the elevated מידות of חסד, גבורה, ותפארת down to your feet - showing that your joy in mitzvot channels supreme holiness from the highest levels into physical action.",
      number: "Three myrtles represent the threefold pattern (תלת גו תלת) that exists throughout creation.",
    },
    aravot: {
      name: "Aravot (ערבות)",
      title: "The Willow Branches",
      letter: "ה (Hey - First)",
      represents: "The lips and speech",
      symbolism: "Jewish souls who have neither Torah nor good deeds, yet are still bound together with all Israel",
      mystical: "Willows have neither taste nor fragrance, representing פושעי ישראל (sinners of Israel) and שוכני עפר (dwellers in dust). Yet they are bound together with the tzaddik's lulav, showing that even they can connect to righteousness and should never despair.",
      seventy: "ערבה is the acronym for ע׳ רבה (Great Seventy), corresponding to the large ע in שמע ישראל. Represents the spreading of divine unity into all seventy languages and nations.",
      anatomy: "Corresponds to the lips in human anatomy",
      awakening: "The נענועים (shakings) are like waking someone from sleep - you shake and stir all the שוכני עפר so they awaken from their sleep. The movements perform this cosmic awakening.",
      practical: "When you shake the willows, you're extending the proclamation of divine oneness into every corner of creation, preparing the world for when all nations will recognize the one Creator.",
    },
  };

  const directions = {
    south: {
      name: "South (דרום)",
      title: "Right - Chesed",
      sefirah: "Chesed (Kindness)",
      divineName: "יֶהֶוֶהֶ",
      color: "#FFD700",
      position: "right",
      guest: "Avraham Avinu",
      essence: "Divine Love & Expansion",
      meditation: "Raise Chesed to its root in Da'at. Elevate personal love toward Hashem above worldly desires. Focus on divine kindness flowing from the right side - the side of giving and expansion.",
      mystical: "Connect to the primordial light of creation, drawing from the infinite compassion of Ein Sof.",
      effect: "Hearts opened to receive divine love and to give it to others.",
    },
    north: {
      name: "North (צפון)",
      title: "Left - Gevurah",
      sefirah: "Gevurah (Strength)",
      divineName: "יְהְוְהְ",
      color: "#DC143C",
      position: "left",
      guest: "Yitzchak Avinu",
      essence: "Divine Strength & Boundaries",
      meditation: "Raise Gevurah to its root in Da'at. Elevate fear of Hashem above fear of people or the physical world. Focus on divine strength and boundaries - the ability to say 'no' to evil.",
      mystical: "Channel the contracting force that creates vessels for divine light.",
      effect: "Inner strength to overcome spiritual challenges and maintain boundaries.",
    },
    east: {
      name: "East (מזרח)",
      title: "Forward - Tiferet",
      sefirah: "Tiferet (Harmony)",
      divineName: "יֹהֹוֹהֹ",
      color: "#9370DB",
      position: "front",
      guest: "Yaakov Avinu",
      essence: "Divine Beauty & Balance",
      meditation: "Raise Tiferet to its root in Da'at. Align with the beauty of Torah and mitzvot rather than seeking worldly approval. Focus on harmony between Chesed and Gevurah.",
      mystical: "The human realm (מה - 'what?') seeking to understand divine beauty.",
      effect: "Balance and harmony in spiritual practice and daily life.",
    },
    up: {
      name: "Up (מעלה)",
      title: "Above - Netzach",
      sefirah: "Netzach (Victory)",
      divineName: "יִהִוִהִ",
      color: "#FF69B4",
      position: "top",
      guest: "Moshe Rabbeinu",
      essence: "Eternal Victory & Persistence",
      meditation: "Raise Netzach to its root in Da'at. Focus on overcoming the yetzer hara and achieving victory in spiritual matters. Channel energy toward eternal goals.",
      mystical: "Victory corresponds to the right column's extension upward.",
      effect: "Persistent spiritual strength and divine assistance in challenges.",
    },
    down: {
      name: "Down (מטה)",
      title: "Below - Hod",
      sefirah: "Hod (Gratitude)",
      divineName: "יֻהֻוֻהֻ",
      color: "#FF8C00",
      position: "bottom",
      guest: "Aharon HaKohen",
      essence: "Acknowledgment & Gratitude",
      meditation: "Raise Hod to its root in Da'at. Cultivate gratitude to Hashem for His kindness, recognizing His gifts in every moment. Submit to divine will.",
      mystical: "Acknowledge divine sovereignty and our dependence on His grace.",
      effect: "Heart filled with appreciation and humble recognition of divine gifts.",
    },
    west: {
      name: "West (מערב)",
      title: "Back - Yesod",
      sefirah: "Yesod (Foundation)",
      divineName: "וּהוּוּהוּ",
      color: "#4169E1",
      position: "back",
      guest: "Yosef HaTzaddik",
      essence: "Holy Foundation & Connection",
      meditation: "Raise Yesod to its root in Da'at. Form holy connections with righteous individuals. Dedicate oneself fully to Hashem's service with purity of intent.",
      mystical: "The channel through which all upper lights flow to Malchut.",
      effect: "Strong foundation for spiritual growth and connection to the community of Israel.",
    },
  };

  const handleDirectionClick = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedDirection(direction);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleClose = () => {
    setSelectedDirection(null);
  };

  const handleSpeciesClick = (species, e) => {
    e.stopPropagation();
    setSelectedSpecies(species);
  };

  const handleCloseSpecies = () => {
    setSelectedSpecies(null);
  };

  return (
    <div className="experience-container">
      <Link to="/" className="back-button">
        ← Back to Kavanos
      </Link>

      <div className="header-3d">
        <h1>🌿 The Six Directions - Daled Minim Experience 🌿</h1>
        <p className="subtitle">
          Click on any direction to discover the mystical teachings
        </p>
      </div>

      <div className="scene-container">
        <div className={`scene-3d ${selectedDirection ? "blurred" : ""}`}>
          {/* Central Chassid with Daled Minim */}
          <div className="chassid-center">
            <div className="chassid-figure">
              <div className="chassid-head"></div>
              <div className="chassid-beard"></div>
              <div className="chassid-body"></div>
              <div className="chassid-arm-left"></div>
              <div className="chassid-arm-right"></div>

              {/* Daled Minim in hands */}
              <div className="daled-minim">
                <div
                  className="lulav clickable-species"
                  onClick={(e) => handleSpeciesClick("lulav", e)}
                  title="Click to learn about the Lulav"
                ></div>
                <div
                  className="hadassim hadassim-left clickable-species"
                  onClick={(e) => handleSpeciesClick("hadassim", e)}
                  title="Click to learn about the Hadassim"
                ></div>
                <div
                  className="hadassim hadassim-right clickable-species"
                  onClick={(e) => handleSpeciesClick("hadassim", e)}
                  title="Click to learn about the Hadassim"
                ></div>
                <div
                  className="aravot clickable-species"
                  onClick={(e) => handleSpeciesClick("aravot", e)}
                  title="Click to learn about the Aravot"
                ></div>
                <div
                  className="etrog clickable-species"
                  onClick={(e) => handleSpeciesClick("etrog", e)}
                  title="Click to learn about the Etrog"
                ></div>
              </div>
            </div>

            <div className="chassid-label">Chassid with Daled Minim</div>
          </div>

          {/* Six Direction Buttons */}
          <button
            className={`direction-btn direction-south ${
              selectedDirection === "south" ? "active" : ""
            }`}
            onClick={() => handleDirectionClick("south")}
            style={{ "--btn-color": directions.south.color }}
          >
            <span className="direction-icon">→</span>
            <span className="direction-name">South</span>
            <span className="direction-hebrew">דרום</span>
          </button>

          <button
            className={`direction-btn direction-north ${
              selectedDirection === "north" ? "active" : ""
            }`}
            onClick={() => handleDirectionClick("north")}
            style={{ "--btn-color": directions.north.color }}
          >
            <span className="direction-icon">←</span>
            <span className="direction-name">North</span>
            <span className="direction-hebrew">צפון</span>
          </button>

          <button
            className={`direction-btn direction-east ${
              selectedDirection === "east" ? "active" : ""
            }`}
            onClick={() => handleDirectionClick("east")}
            style={{ "--btn-color": directions.east.color }}
          >
            <span className="direction-icon">↑</span>
            <span className="direction-name">East</span>
            <span className="direction-hebrew">מזרח</span>
          </button>

          <button
            className={`direction-btn direction-west ${
              selectedDirection === "west" ? "active" : ""
            }`}
            onClick={() => handleDirectionClick("west")}
            style={{ "--btn-color": directions.west.color }}
          >
            <span className="direction-icon">↓</span>
            <span className="direction-name">West</span>
            <span className="direction-hebrew">מערב</span>
          </button>

          <button
            className={`direction-btn direction-up ${
              selectedDirection === "up" ? "active" : ""
            }`}
            onClick={() => handleDirectionClick("up")}
            style={{ "--btn-color": directions.up.color }}
          >
            <span className="direction-icon">⬆</span>
            <span className="direction-name">Up</span>
            <span className="direction-hebrew">מעלה</span>
          </button>

          <button
            className={`direction-btn direction-down ${
              selectedDirection === "down" ? "active" : ""
            }`}
            onClick={() => handleDirectionClick("down")}
            style={{ "--btn-color": directions.down.color }}
          >
            <span className="direction-icon">⬇</span>
            <span className="direction-name">Down</span>
            <span className="direction-hebrew">מטה</span>
          </button>

          {/* Animated rays from center */}
          <div className="energy-rays">
            {Object.keys(directions).map((dir) => (
              <div
                key={dir}
                className={`ray ray-${directions[dir].position} ${
                  selectedDirection === dir ? "ray-active" : ""
                }`}
                style={{ "--ray-color": directions[dir].color }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Panel */}
      {selectedDirection && (
        <div className="info-panel-overlay" onClick={handleClose}>
          <div
            className="info-panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderTopColor: directions[selectedDirection].color,
            }}
          >
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            <div className="panel-header">
              <h2>{directions[selectedDirection].title}</h2>
              <div
                className="divine-name"
                style={{ color: directions[selectedDirection].color }}
              >
                {directions[selectedDirection].divineName}
              </div>
            </div>

            <div className="panel-content">
              <div className="info-section">
                <h3>Sefirah</h3>
                <p>{directions[selectedDirection].sefirah}</p>
              </div>

              <div className="info-section">
                <h3>Ushpizin Guest</h3>
                <p>{directions[selectedDirection].guest}</p>
              </div>

              <div className="info-section">
                <h3>Essence</h3>
                <p>{directions[selectedDirection].essence}</p>
              </div>

              <div className="info-section highlight">
                <h3>Meditation</h3>
                <p>{directions[selectedDirection].meditation}</p>
              </div>

              <div className="info-section mystical">
                <h3>Mystical Aspect</h3>
                <p>{directions[selectedDirection].mystical}</p>
              </div>

              <div className="info-section effect">
                <h3>Spiritual Effect</h3>
                <p>{directions[selectedDirection].effect}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="instructions">
        <p>
          Experience the sacred journey through the six directions of the Daled
          Minim. Each direction represents a unique spiritual dimension and
          divine emanation.
        </p>
        <p style={{ marginTop: "15px", fontSize: "0.95rem", fontStyle: "italic" }}>
          💡 Tip: Click on any of the Four Species held by the Chassid to learn about their symbolism!
        </p>
      </div>

      {/* Species Information Modal */}
      {selectedSpecies && (
        <div className="info-panel-overlay" onClick={handleCloseSpecies}>
          <div
            className="info-panel species-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleCloseSpecies}>
              ✕
            </button>

            <div className="panel-header">
              <h2>{speciesInfo[selectedSpecies].name}</h2>
              <div className="species-subtitle">
                {speciesInfo[selectedSpecies].title}
              </div>
            </div>

            <div className="panel-content">
              <div className="info-section species-letter">
                <h3>Divine Letter</h3>
                <p className="hebrew-large">{speciesInfo[selectedSpecies].letter}</p>
              </div>

              <div className="info-section">
                <h3>Represents</h3>
                <p>{speciesInfo[selectedSpecies].represents}</p>
              </div>

              <div className="info-section">
                <h3>Symbolism</h3>
                <p>{speciesInfo[selectedSpecies].symbolism}</p>
              </div>

              <div className="info-section mystical">
                <h3>Mystical Understanding</h3>
                <p>{speciesInfo[selectedSpecies].mystical}</p>
              </div>

              {speciesInfo[selectedSpecies].gematria && (
                <div className="info-section highlight">
                  <h3>Gematria</h3>
                  <p>{speciesInfo[selectedSpecies].gematria}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].anatomy && (
                <div className="info-section">
                  <h3>Human Anatomy</h3>
                  <p>{speciesInfo[selectedSpecies].anatomy}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].taste && (
                <div className="info-section">
                  <h3>Perception Type</h3>
                  <p>{speciesInfo[selectedSpecies].taste}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].fragrance && (
                <div className="info-section">
                  <h3>Spiritual Fragrance</h3>
                  <p>{speciesInfo[selectedSpecies].fragrance}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].precedence && (
                <div className="info-section highlight">
                  <h3>Torah Precedence</h3>
                  <p>{speciesInfo[selectedSpecies].precedence}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].unity && (
                <div className="info-section">
                  <h3>Unifying Aspect</h3>
                  <p>{speciesInfo[selectedSpecies].unity}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].number && (
                <div className="info-section">
                  <h3>Sacred Number</h3>
                  <p>{speciesInfo[selectedSpecies].number}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].seventy && (
                <div className="info-section">
                  <h3>The Seventy Nations</h3>
                  <p>{speciesInfo[selectedSpecies].seventy}</p>
                </div>
              )}

              {speciesInfo[selectedSpecies].awakening && (
                <div className="info-section mystical">
                  <h3>Cosmic Awakening</h3>
                  <p>{speciesInfo[selectedSpecies].awakening}</p>
                </div>
              )}

              <div className="info-section effect">
                <h3>Practical Application</h3>
                <p>{speciesInfo[selectedSpecies].practical}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DaledMinum3D;
