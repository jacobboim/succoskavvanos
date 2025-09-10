import React, { useState } from "react";
import "./App.css";

const LulavChart = () => {
  const [selectedDay, setSelectedDay] = useState("");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="container">
      <h1>🌿 Kavanos for Shaking the Lulav - Na'anuim 🌿</h1>

      <div className="mystical-note">
        <div className="note-title">
          The Mystical Mechanics of הולכה (Going Out):
        </div>
        When extending the lulav away from your body, you're performing a cosmic
        act of <span className="gematria">רצוא</span> (running forth) - reaching
        toward <strong>יושב במרומים</strong> (He who dwells on high) to request
        the opening of divine treasure houses. Each extension creates a
        protective barrier of holy consciousness, like the{" "}
        <strong>להט החרב המתהפכת</strong> (flaming sword) but in holiness -
        permutations of the divine name that transform spiritual obstacles into
        stepping stones. You're literally reaching from the world of limitation
        toward the unlimited, requesting that <strong>דעת עליון</strong>{" "}
        (supernal knowledge) flow down to make divine reality tangible in your
        daily life.
      </div>

      <div className="mystical-note">
        <div className="note-title">
          The Sacred Integration of הבאה (Coming In):
        </div>
        The Arizal teaches that when drawing the lulav back toward your heart,
        make a small <strong>הכאה</strong> (striking motion) against your body -
        this physically integrates the <strong>מוחין</strong> (divine
        consciousness) into your flesh until the <strong>מידות</strong> emerge
        in actual revelation. This is <span className="gematria">שוב</span>{" "}
        (returning) - bringing the unlimited light into <strong>מלכות</strong>,
        the world of limitation, where it can illuminate your emotions,
        thoughts, and deeds. Each "coming in" motion draws divine awareness
        deeper, until your knowledge of Hashem becomes <strong>חיה</strong>{" "}
        (alive) and tangible. The final <strong>ה</strong> of the divine name
        receives from all directions - your heart becomes the dwelling place
        where <strong>נווה אפריון</strong> (the beautiful pavilion) is
        established, making your body a <strong>מכון בית אלקינו</strong>{" "}
        (foundation for the house of our God).
      </div>

      <div className="mystical-note">
        <div className="note-title">
          The Four Species as a Living Divine Name:
        </div>
        When you grasp the <strong>ד' המינים</strong> together, you're literally
        holding the four letters of <span className="gematria">שם הוי"ה</span>{" "}
        in physical form: <strong>הדסים</strong> (myrtle) embody the{" "}
        <strong>יו"ד</strong> - the divine point of initial will;{" "}
        <strong>ערבות</strong> (willows) manifest the first <strong>ה'</strong>{" "}
        - divine understanding flowing down; <strong>לולב</strong> (palm)
        channels the <strong>ו'</strong> - the connecting line between upper and
        lower; and <strong>אתרוג</strong> (etrog) receives as the final{" "}
        <strong>ה'</strong> - malchut that integrates all divine emanations.
      </div>

      <div className="mystical-note">
        <div className="note-title">Daily Sefirot Focus - Select Your Day:</div>
        <select
          className="day-selector"
          value={selectedDay}
          onChange={handleDayChange}
        >
          <option value="">Choose Day of Succos...</option>
          <option value="day1">Day 1 - Chesed (Avraham)</option>
          <option value="day2">Day 2 - Gevurah (Yitzchak)</option>
          <option value="day3">Day 3 - Tiferet (Yaakov)</option>
          <option value="day4">Day 4 - Netzach (Moshe)</option>
          <option value="day5">Day 5 - Hod (Aharon)</option>
          <option value="day6">Day 6 - Yesod (Yosef)</option>
          <option value="day7">Day 7 - Malchut (Dovid)</option>
        </select>
      </div>

      {selectedDay === "day1" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 1 - Chesed (Loving-kindness) - אברהם אבינו
          </div>
          <strong>Divine Name Meditation:</strong> Focus on שם הוי"ה with
          voweling of <span className="gematria">סגול</span>, arousing flames of
          divine love in your heart.
          <br />
          <br />
          <strong>Primary Intention:</strong> "Let divine love flow through me
          to awaken authentic love for Hashem, Torah, and all of Israel."
          <br />
          <br />
          <strong>Specific Meditations:</strong>
          <ul>
            <li>
              <strong>Going Out:</strong> Contemplate how everything in creation
              is השפעת אור השי"ת - the influence of divine light. See Hashem's
              personal influence upon you, both in your essential existence and
              in every detail.
            </li>
            <li>
              <strong>Coming In:</strong> Draw this recognition into אהבת ה' בכל
              לב - complete love of Hashem with all your heart. Feel your heart
              opening to divine love.
            </li>
          </ul>
          <strong>Practical Applications:</strong>
          <br />• Study Torah from a place of love rather than obligation
          <br />• Practice chesed with others, recognizing that everything
          belongs to Hashem
          <br />• Cultivate אהבת ישראל by seeing every Jew as חלק אלוה ממעל ממש
          <br />• Remove complaints against others by understanding that
          everything comes from Hashem for your good
          <br />
          <br />
          <strong>Elevation from Fallen Love:</strong> Transform any physical
          attractions by recognizing that what truly attracts you is the divine
          spark within all things. There is no true pleasure or benefit except
          in delighting in Hashem and His love.
        </div>
      )}

      {selectedDay === "day2" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 2 - Gevurah (Divine Strength) - יצחק אבינו
          </div>
          <strong>Divine Name Meditation:</strong> Focus on שם הוי"ה with
          voweling of <span className="gematria">שבא</span>, arousing tremendous
          awe of Hashem.
          <br />
          <br />
          <strong>Primary Intention:</strong> "Strengthen me with proper fear of
          Heaven - not fear of people or worldly things, but awe of the Divine."
          <br />
          <br />
          <strong>Three Levels of Yirah:</strong>
          <ul>
            <li>
              <strong>יראת העונש (Fear of Punishment):</strong> Strengthen
              knowledge that "there is a judge and there is judgment." Don't
              listen to the yetzer that says Hashem is forgiving of everything.
            </li>
            <li>
              <strong>יראת חטא (Fear of Sin):</strong> Fear transgression itself
              because it distances you from Hashem, the source of life.
            </li>
            <li>
              <strong>יראת הרוממות (Fear of Exaltedness):</strong> Contemplate
              His greatness and enter into awe from the height of His awesome
              majesty.
            </li>
          </ul>
          <strong>Mystical Understanding:</strong> Gevurah is the power of צמצום
          (divine contraction) - the root of all lower world existence. Through
          tzimtzum, "space" was created for our world and our choices, giving
          meaning to reward and punishment.
          <br />
          <br />
          <strong>Practical Applications:</strong>
          <br />• Don't fear anything in the world except Hashem
          <br />• Remember: "I am ashamed before my Creator that He should see
          me fearing something other than Him"
          <br />• Use fear to move away from transgression, but not to bring
          sadness - if you try with all your strength, "הקב"ה doesn't come with
          complaints against His creatures"
        </div>
      )}

      {selectedDay === "day3" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 3 - Tiferet (Divine Beauty) - יעקב אבינו
          </div>
          <strong>Divine Name Meditation:</strong> Focus on שם הוי"ה with
          voweling of <span className="gematria">חולם</span>, feeling the
          harmony between chesed and gevurah.
          <br />
          <br />
          <strong>Primary Intention:</strong> "Help me feel truly connected to
          You, Hashem, experiencing devekut - divine attachment - in every
          moment."
          <br />
          <br />
          <strong>The Nature of Devekut:</strong> Unlike chesed (love from a
          distance), devekut is feeling a soul connection like glue joining two
          things. True connection requires both to be present together - feeling
          Hashem's greatness (chesed) combined with sensing His immediate
          presence (gevurah).
          <br />
          <br />
          <strong>Two Primary Paths to Devekut:</strong>
          <ul>
            <li>
              <strong>Torah Study in Holiness:</strong> Learn with recognition
              that Torah is עצמותו אורו ית' - His essential light. Intend while
              learning to cleave to Hashem, who is the inner essence hidden in
              every word of Torah.
            </li>
            <li>
              <strong>Speaking with Hashem:</strong> Get used to pouring out
              your heart before Hashem, requesting everything from Him and
              thanking Him for everything. This trains you to live with Hashem
              and feel His existence with you.
            </li>
          </ul>
          <strong>Practical Applications:</strong>
          <br />• Include everything that happens in your devekut by
          understanding that Hashem does everything
          <br />• See every occurrence as a "bat kol" - divine voice - informing
          you of Hashem's will
          <br />• Flee from anything that damages devekut, especially pride,
          about which it's said "I and he cannot dwell in one dwelling"
        </div>
      )}

      {selectedDay === "day4" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 4 - Netzach (Eternal Victory) - משה רבינו
          </div>
          <strong>Primary Intention:</strong> "Give me strength to overcome
          spiritual obstacles and persist even when I don't feel inspired."
          <br />
          <br />
          <strong>The Power of Memory:</strong> Even when you don't have "מוחין"
          (divine consciousness) and don't feel alive love of Hashem in your
          heart, stand strong to overcome the yetzer hara through memory of
          truth you've already felt.
          <br />
          <br />
          <strong>What to Remember:</strong>
          <ul>
            <li>Hashem's love toward you</li>
            <li>Your love toward Hashem</li>
            <li>The covenant of love made with you</li>
            <li>
              Your commitment to remain faithful even without feeling vitality
            </li>
          </ul>
          <strong>Mystical Insight:</strong> Netzach operates למעלה מטעם ודעת -
          above reason and knowledge. Sometimes you must persist with holy
          stubbornness even when logic doesn't support you, trusting in the
          higher purpose.
          <br />
          <br />
          <strong>Moshe's Example:</strong> Though Moshe achieved the highest
          levels of דעת, he's associated with netzach because of the tremendous
          trials he underwent before age 80, standing firm through all of them.
          No one can reach high levels without literally overcoming and
          conquering through netzach.
          <br />
          <br />
          <strong>Caution:</strong> Don't misuse this trait for stubbornness in
          wrong directions. If Heaven is clearly blocking something you've
          started, withdraw your hand in honor of your Creator rather than
          persisting from ego.
        </div>
      )}

      {selectedDay === "day5" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 5 - Hod (Acknowledgment) - אהרן הכהן
          </div>
          <strong>Primary Intention:</strong> "Let me truly recognize that
          everything comes from You and constantly give thanks."
          <br />
          <br />
          <strong>Two Aspects of Hod:</strong>
          <ul>
            <li>
              <strong>Acknowledgment of Hidden Reality:</strong> Acknowledge
              Hashem's existence even when you don't feel Him, based on memory
              of what you previously experienced.
            </li>
            <li>
              <strong>Gratitude and Recognition:</strong> Thank and praise for
              all the good Hashem has given, recognizing that everything comes
              from Him alone.
            </li>
          </ul>
          <strong>The Essence of Hod:</strong> Acknowledging what isn't visible
          to the eyes - recognizing inner reality. When you "live" this
          awareness, you see Hashem's hand in everything without attributing
          anything to natural causes.
          <br />
          <br />
          <strong>External Beauty from Inner Beauty:</strong> Hod includes חסד
          הניתן על פני חתן - the kindness given upon a groom's face. True צדיקים
          have faces that shine with supernal hod covering them, reflecting
          their inner spiritual beauty.
          <br />
          <br />
          <strong>Practical Applications:</strong>
          <br />• Give praise for everything that happens, knowing all good
          comes from Hashem
          <br />• Even acknowledge apparent difficulties as good, knowing
          everything is for your benefit
          <br />• Avoid false external beauty that lacks inner substance
          <br />• Don't be impressed by others who have superficial beauty
          without inner content
        </div>
      )}

      {selectedDay === "day6" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 6 - Yesod (Foundation) - יוסף הצדיק
          </div>
          <strong>Primary Intention:</strong> "Keep me faithful and connected to
          You in all circumstances, pure in my intentions and desires."
          <br />
          <br />
          <strong>The Nature of Brit (Covenant):</strong> Yesod involves התקשרות
          והתחברות - remaining connected to Hashem even without feeling devekut.
          From memory of connection, continue practically to remain bound to
          Hashem in every situation.
          <br />
          <br />
          <strong>The Complete Jewish Form:</strong> All your actions, words,
          and thoughts revolve only around Hashem. Anything not related to this
          doesn't interest you. You derive pleasure only from holiness and
          remain faithful to Hashem, not taking any pleasure that kelipot offer.
          <br />
          <br />
          <strong>The Primary Test:</strong> The main test of faithfulness
          involves pleasures of this world. Kelipot try to seduce by showing
          apparent pleasures, but one who connects only to Hashem merits
          enormous spiritual pleasure and feels taste in connection with Hashem,
          Torah, tefilah, Shabbat, and all spiritual matters.
          <br />
          <br />
          <strong>The Spearhead Battle:</strong> The most known desire is "חוד
          החנית" - the spearpoint of the battle. Here maximum power is given to
          both sides. Victory here brings the greatest spiritual pleasure and
          connection.
          <br />
          <br />
          <strong>Practical Applications:</strong>
          <br />• Sanctify even permitted physical pleasures according to
          Hashem's will
          <br />• Flee from anything that connects you to evil
          <br />• In every pleasure, connect to the divine spark rather than the
          external form
          <br />• Remember: the foundation of everything is to whom you're
          connected and where you find your vitality
        </div>
      )}

      {selectedDay === "day7" && (
        <div className="mystical-note">
          <div className="note-title">
            Day 7 - Malchut (Divine Kingship) - דוד המלך
          </div>
          <strong>Primary Intention:</strong> "Help me accept Your will
          completely and see Your hand in everything that happens."
          <br />
          <br />
          <strong>Recognition of Divine Kingship:</strong> Malchut involves
          recognizing Hashem's kingship and simple faith in Him. Since you
          recognize His kingship, turn to Him in every matter, knowing only He
          can truly help.
          <br />
          <br />
          <strong>Complete Acceptance of the Yoke:</strong> The general service
          in malchut is complete קבלת עול - doing His will with all your
          strength even without desire, like a servant before his master. This
          is the foundation of all spiritual work.
          <br />
          <br />
          <strong>The Test of True Service:</strong> A servant who says "I'll do
          everything except one thing" has already thrown off his master's yoke.
          It becomes clear that even what he does do isn't from obligation but
          from personal desire. Therefore, accept to do everything, even without
          will or desire.
          <br />
          <br />
          <strong>Prayer and Faith:</strong> Strengthen prayers, especially
          התבודדות (personal meditation/prayer) - crying out with all your heart
          to Hashem. This is the special service of Hoshana Rabbah.
          <br />
          <br />
          <strong>Practical Applications:</strong>
          <br />• See Hashem's existence in everything physical
          <br />• Recognize divine providence in all that occurs
          <br />• Never do anything against the honor of Heaven
          <br />• Strengthen faith-based action even when you don't understand
          <br />• Accept divine will in areas that seem difficult or contrary to
          your preferences
        </div>
      )}

      <div className="table-container">
        <table className="chart">
          <thead>
            <tr>
              <th>Direction</th>
              <th>
                Sefirah
                <br />
                (Middah)
              </th>
              <th>
                Divine Name
                <br />
                Permutation
              </th>
              <th>
                Milui
                <br />
              </th>
              <th>
                Going Out (Holacha)
                <br />
                Mystical Elevation
              </th>
              <th>
                Coming In (Havoa)
                <br />
                Drawing Down Light
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="direction">
                Right
                <br />
                (South/דרום)
              </td>
              <td className="sefirah">
                Chesed
                <br />
                (Kindness)
              </td>
              <td className="hebrew">י-ה-ו</td>
              <td className="milui">
                עב (72)
                <br />
                <span className="miluishem">יוד הי ויו הי</span>
              </td>
              <td className="meditation going-out">
                Raise Chesed to its root in Da'at. Elevate personal love toward
                Hashem above worldly desires. Focus on divine kindness flowing
                from the right side - the side of giving and expansion. <br />
                <br />
                <em>Mystical aspect:</em> Connect to the primordial light of
                creation, drawing from the infinite compassion of Ein Sof.
              </td>
              <td className="meditation coming-in">
                Bring this light into Malchut, inspiring love and devotion. Pray
                for mercy, forgiveness, and abundance of kindness from Above.{" "}
                <br />
                <br />
                <em>Effect:</em> Hearts opened to receive divine love and to
                give it to others.
              </td>
            </tr>
            <tr>
              <td className="direction">
                Left
                <br />
                (North/צפון)
              </td>
              <td className="sefirah">
                Gevurah
                <br />
                (Strength)
              </td>
              <td className="hebrew">ה-ו-י</td>
              <td className="milui">
                סג (63)
                <br />
                <span className="miluishem">יוד הי ואו הי</span>
              </td>
              <td className="meditation going-out">
                Raise Gevurah to its root in Da'at. Elevate fear of Hashem above
                fear of people or the physical world. Focus on divine strength
                and boundaries - the ability to say 'no' to evil. <br />
                <br />
                <em>Mystical aspect:</em> Channel the contracting force that
                creates vessels for divine light.
              </td>
              <td className="meditation coming-in">
                Bring light into Malchut, instilling proper fear of Heaven.
                Empower the soul to resist the yetzer hara and avoid sin. <br />
                <br />
                <em>Effect:</em> Inner strength to overcome spiritual challenges
                and maintain boundaries.
              </td>
            </tr>
            <tr>
              <td className="direction">
                Forward
                <br />
                (East/מזרח)
              </td>
              <td className="sefirah">
                Tiferet
                <br />
                (Harmony)
              </td>
              <td className="hebrew">ו-י-ה</td>
              <td className="milui">
                מה (45)
                <br />
                <span className="miluishem">יוד הא ואו הא</span>
              </td>
              <td className="meditation going-out">
                Raise Tiferet to its root in Da'at. Align with the beauty of
                Torah and mitzvot rather than seeking worldly approval. Focus on
                harmony between Chesed and Gevurah. <br />
                <br />
                <em>Mystical aspect:</em> The human realm (מה - "what?") seeking
                to understand divine beauty.
              </td>
              <td className="meditation coming-in">
                Bring light into Malchut, beautifying service to Hashem. Pray
                for spiritual renewal to shine on all Israel. <br />
                <br />
                <em>Effect:</em> Balance and harmony in spiritual practice and
                daily life.
              </td>
            </tr>
            <tr>
              <td className="direction">Up (מעלה)</td>
              <td className="sefirah">
                Netzach
                <br />
                (Victory)
              </td>
              <td className="hebrew">י-ו-ה</td>
              <td className="milui">
                עב (72)
                <br />
                <span className="miluishem">יוד הי ויו הי</span>
              </td>
              <td className="meditation going-out">
                Raise Netzach to its root in Da'at. Focus on overcoming the
                yetzer hara and achieving victory in spiritual matters. Channel
                energy toward eternal goals. <br />
                <br />
                <em>Mystical aspect:</em> Victory corresponds to the right
                column's extension upward.
              </td>
              <td className="meditation coming-in">
                Bring light into Malchut, instilling perseverance and triumph
                over challenges. Pray for success in both spiritual and material
                endeavors. <br />
                <br />
                <em>Effect:</em> Persistent spiritual strength and divine
                assistance in challenges.
              </td>
            </tr>
            <tr>
              <td className="direction">Down (מטה)</td>
              <td className="sefirah">
                Hod
                <br />
                (Gratitude)
              </td>
              <td className="hebrew">ה-ו-י</td>
              <td className="milui">
                סג (63)
                <br />
                <span className="miluishem">יוד הי ואו הי</span>
              </td>
              <td className="meditation going-out">
                Raise Hod to its root in Da'at. Cultivate gratitude to Hashem
                for His kindness, recognizing His gifts in every moment. Submit
                to divine will. <br />
                <br />
                <em>Mystical aspect:</em> Acknowledge divine sovereignty and our
                dependence on His grace.
              </td>
              <td className="meditation coming-in">
                Bring light into Malchut, filling the heart with true gratitude
                and submission. Pray to always recognize Hashem's continuous
                kindness. <br />
                <br />
                <em>Effect:</em> Heart filled with appreciation and humble
                recognition of divine gifts.
              </td>
            </tr>
            <tr>
              <td className="direction">
                Back
                <br />
                (West/מערב)
              </td>
              <td className="sefirah">
                Yesod
                <br />
                (Foundation)
              </td>
              <td className="hebrew">ו-ה-י</td>
              <td className="milui">
                מה (45)
                <br />
                <span className="miluishem">יוד הא ואו הא</span>
              </td>
              <td className="meditation going-in">
                Raise Yesod to its root in Da'at. Form holy connections with
                righteous individuals. Dedicate oneself fully to Hashem's
                service with purity of intent. <br />
                <br />
                <em>Mystical aspect:</em> The channel through which all upper
                lights flow to Malchut.
              </td>
              <td className="meditation coming-in">
                Bring light into Malchut, solidifying connection to Hashem and
                spiritual purity. Pray for all Jewish souls in exile to return.{" "}
                <br />
                <br />
                <em>Effect:</em> Strong foundation for spiritual growth and
                connection to the community of Israel.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mystical-note">
        <div className="note-title">Heart and Channel:</div>
        Imagine the <strong>אתרוג</strong> as your heart and the{" "}
        <strong>לולב</strong> as a channel for drawing down <strong>דעת</strong>{" "}
        (Divine wisdom) and <strong>חסד</strong> (loving-kindness) from above.
        Each wave draws <strong>חסד</strong> from the transcendent level of{" "}
        <strong>דעת</strong> into your heart, which then flows to the
        corresponding limb. This creates a circulation system where divine
        consciousness flows from the highest source through your heart to
        illuminate each aspect of your being.
      </div>

      <div className="mystical-note">
        <div className="note-title">
          The Mathematics of Complete Encirclement:
        </div>
        When we add the gematria values of all six <strong>milui</strong>{" "}
        (divine name spellings) used during the lulav shakings, we reach a
        profound total:{" "}
        <span className="gematria">
          עב (72) + סג (63) + מה (45) + עב (72) + סג (63) + מה (45) = 360
        </span>
        . This equals the degrees in a complete circle, revealing that through
        the six directional movements, we create a perfect sphere of divine
        protection around ourselves. Just as{" "}
        <span className="gematria">360</span> represents geometric completeness,
        our waving establishes <strong>שלימות</strong> (wholeness) - we are
        completely surrounded by divine consciousness flowing from all
        directions.
      </div>

      <div className="mystical-note">
        <div className="note-title">The Sukkah Connection:</div>
        Just as the Clouds of Glory traveled from place to place yet were
        considered "in their place" because they followed divine will ("על פי ה'
        יחנו ועל פי ה' יסעו"), so too one who accepts the yoke of Heaven
        (represented by the final ה) remains spiritually "in place" regardless
        of which divine emanation they receive. This is the deeper meaning of
        dwelling in the sukkah during the festival.
      </div>

      <div className="mystical-note">
        <div className="note-title">Essential Concept:</div>
        The final ה (Hey) of Hashem's name יהוה remains stationary during all
        shakings, representing Malchut (Kingship) which receives from all
        directions. We permute only the first three letters (יהו) in 6 different
        combinations for each direction, totaling 18 letters and 18 shakings -
        corresponding to the word חי (Life).
      </div>
    </div>
  );
};

export default LulavChart;
