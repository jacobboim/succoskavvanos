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
              <td className="hebrew">ה-י-ו</td>
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
          The Mathematics of Divine Completion - Shema and Baruch Shem:
        </div>
        The gematria here reveals a profound spiritual transformation taking
        place through your Four Species practice. When you spell out{" "}
        <strong>לולב אתרוג הדס ערבה</strong> in their full letter names
        (למד־וו־למד־בית, אלף־תו־ריש־וו־גימל, הי־דלת־סמך, עין־ריש־בית־הי) and add
        4 (representing the four words), the total equals exactly three times
        the complete <strong>שמע ישראל ה׳ אלקינו ה׳ אחד</strong> - corresponding
        to your three daily recitations of Shema (morning, evening, and
        bedtime).
        <br />
        <br />
        But here's where this becomes extraordinary: The word{" "}
        <strong>סוכה</strong> spelled in full letters (סמך־וו־כף־הי) equals
        exactly 240. This is precisely the numerical difference between{" "}
        <strong>שמע ישראל ה׳ אלקינו ה׳ אחד</strong> (1,118) and{" "}
        <strong>ברוך שם כבוד מלכותו לעולם ועד</strong> (1,358). The difference
        is exactly 240.
        <br />
        <br />
        Since the Torah mentions "sukkah" three times in the verses about
        dwelling in sukkot, we have 3 × 240 = 720. This means that through the
        three-fold power of the sukkah, your three daily recitations of{" "}
        <strong>שמע ישראל</strong> (represented by the Four Species) are
        transformed into three recitations of{" "}
        <strong>ברוך שם כבוד מלכותו לעולם ועד</strong>.
        <br />
        <br />
        <strong>The Spiritual Transformation:</strong>{" "}
        <strong>שמע ישראל</strong> represents <strong>יחודא עילאה</strong>{" "}
        (higher unification) - contemplating God as He exists in His infinite
        essence, beyond all worlds. This corresponds to the Four Species, about
        which the Midrash states: "Etrog - this is God, Lulav - this is God,
        Hadas - this is God, Aravah - this is God" - they represent direct
        connection to the Divine essence.
        <br />
        <br />
        <strong>ברוך שם כבוד מלכותו לעולם ועד</strong> represents{" "}
        <strong>יחודא תתאה</strong> (lower unification) - recognizing God's Name
        as it descends and rules within all worlds, revealed through His
        attribute of <strong>מלכות</strong> (Kingship). This corresponds to the
        sukkah, which represents <strong>מלכות</strong> and recalls the{" "}
        <strong>ענני הכבוד</strong> (Clouds of Glory) - divine lights that
        surround all Israel in connection with <strong>כנסת ישראל</strong> (the
        divine feminine), which is <strong>מלכות</strong>.
        <br />
        <br />
        <strong>The Physical Structure as Spiritual Symbol:</strong> Even the
        sukkah's required structure - two complete walls and a third wall of
        even one handbreadth - forms the shape of the letter <strong>ה</strong>{" "}
        (Hey), representing the final <strong>ה</strong> of God's name{" "}
        <strong>יהוה</strong>, which is <strong>מלכות</strong>.
        <br />
        <br />
        <strong>Your Practice:</strong> When you shake the Four Species inside
        the sukkah, you're literally uniting <strong>יחודא עילאה</strong> with{" "}
        <strong>יחודא תתאה</strong> - drawing the infinite divine essence down
        through the Name <strong>יהוה</strong> to illuminate the souls of
        Israel.
      </div>

      <div className="mystical-note">
        <div className="note-title">
          The Lulav as Your Spinal Column of Divine Connection:
        </div>
        The <strong>לולב</strong> represents your spinal column - the channel
        connecting mind and heart, brain and body. When you raise and lower it,
        you're creating a flow of divine consciousness from your intellect down
        through your spine into your heart, then spreading to all your limbs.
        The lulav binds with <strong>הדסים וערבות</strong> below while extending
        above them, showing how you connect supernal wisdom to lower levels
        through your central channel. Each movement draws{" "}
        <strong>דעת עליון</strong> (supernal knowledge) through your spiritual
        spine into every aspect of your being.
      </div>

      <div className="mystical-note">
        <div className="note-title">
          The Lulav's Constant הולכה והבאה - Subjugating the Heart:
        </div>
        The <strong>לולב</strong> requires constant <strong>הולכה והבאה</strong>{" "}
        (going out and bringing in) because <strong>לולב</strong> contains the
        mystical letters <strong>ל"ו ל"ב</strong> (36 and 32) that subjugate the
        heart and all vitality to the Creator. This mirrors the spiritual return
        that happens on Rosh Hashanah and Yom Kippur, when out of fear of divine
        judgment, everyone returns to Hashem.
        <br />
        <br />
        <strong>The Two-Phase Flow:</strong> When you connect yourself above
        through <strong>הולכה</strong> (extending outward),{" "}
        <strong>שפע הדעת וחסדיו</strong> (the flow of divine knowledge and
        kindnesses) pour down upon you from above. Then through{" "}
        <strong>הבאה</strong> (bringing inward), you draw this flow of divine
        vitality into yourself, subjugating all spirits and forces to Hashem -
        declaring that everything comes from Him and He alone gives life to all.
        <br />
        <br />
        <strong>Stopping Evil Winds and Dews:</strong> This movement pattern
        accomplishes what the Sages described:{" "}
        <strong>מוליך ומביא מעלה ומוריד לעצור רוחות וטללים רעים</strong> ("He
        brings forth and brings back, raises up and brings down, to stop evil
        winds and evil dews"). When the great <strong>חסד</strong> (kindness)
        arrives through your movements, all <strong>דינים</strong> (harsh
        judgments) are erased.
      </div>

      <div className="mystical-note-container">
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
          <span className="gematria">360</span> represents geometric
          completeness, our waving establishes <strong>שלימות</strong>{" "}
          (wholeness) - we are completely surrounded by divine consciousness
          flowing from all directions.
        </div>

        <div className="mystical-note">
          <div className="note-title">The Sukkah Connection:</div>
          Just as the Clouds of Glory traveled from place to place yet were
          considered "in their place" because they followed divine will ("על פי
          ה' יחנו ועל פי ה' יסעו"), so too one who accepts the yoke of Heaven
          (represented by the final ה) remains spiritually "in place" regardless
          of which divine emanation they receive. This is the deeper meaning of
          dwelling in the sukkah during the festival.
        </div>

        <div className="mystical-note">
          <div className="note-title">Essential Concept:</div>
          The final ה (Hey) of Hashem's name יהוה remains stationary during all
          shakings, representing Malchut (Kingship) which receives from all
          directions. We permute only the first three letters (יהו) in 6
          different combinations for each direction, totaling 18 letters and 18
          shakings - corresponding to the word חי (Life).
        </div>

        <div className="mystical-note">
          <div className="note-title">
            Drawing Down Divine Knowledge (Daas):
          </div>
          The Four Species come "to draw down from Supernal Daas" - divine
          knowledge that expands and matures the soul. Just as physical trees
          grow through water, your soul grows through the influence of{" "}
          <strong>דעת</strong> flowing from Above. When you shake the lulav in
          all directions, you're literally watering your spiritual "tree of the
          field" - drawing divine consciousness into every aspect of your being.
          The <strong>נענועים</strong> (shakings) draw vitality into the root of
          your soul's knowledge, bringing hidden divine light into the details
          of every middah (character trait).
        </div>

        <div className="mystical-note">
          <div className="note-title">Touching the Tree of Life:</div>
          After Yom Kippur's purification, you've returned to the level of Adam
          before the sin. The lulav shaking is your "stretching forth the hand
          to the Tree of Life" - no longer forbidden, but actively encouraged.
          The word <strong>לולב</strong> equals <strong>חיים</strong> (life) in
          gematria, making this a literal grasping of eternal life. Each
          directional movement defeats the "flame of the ever-turning sword"
          that once blocked access to the Tree, transforming spiritual obstacles
          into pathways of connection.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            Unifying All Divisions - The Four Rivers:
          </div>
          Your lulav movements correspond to the four rivers that flowed from
          Eden before they separated and created all divisions in the world.
          When you shake toward all directions, you're awakening the original
          unified river that existed before separation. This draws peace between
          all conflicts - within yourself, between people, and in the world. The
          name <strong>אהרן</strong> equals <strong>נהר א</strong> (River One),
          and four times this value equals the gematria of all Four Species
          together (לולב אתרוג הדס ערבה), showing how unity encompasses all
          divisions.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Precedence of Action Before Understanding:
          </div>
          By mentioning the <strong>אתרוג</strong> first among the Four Species,
          the Torah reveals the power of "נעשה ונשמע" - doing before
          understanding. When you lift the etrog (representing{" "}
          <strong>מלכות</strong>/action) before the other species, you're
          demonstrating Israel's unique ability to act from pure faith, like the
          ministering angels. This silences all heavenly accusations and shows
          that your service transcends intellectual comprehension, reaching the
          realm of pure devotion.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            Rectifying the Original Sin of Separation:
          </div>
          The <strong>אתרוג</strong> is the only fruit where the tree and fruit
          taste the same - rectifying the primordial sin when Earth failed to
          make trees taste like their fruit. When you hold the etrog during
          shaking, you're healing the original separation between giver and
          receiver, source and result. This restores the intended unity where{" "}
          <strong>משפיע</strong> (giver) and <strong>מקבל</strong> (receiver)
          exist in perfect harmony, eliminating the root of all subsequent
          separations in creation.
        </div>

        <div className="mystical-note">
          <div className="note-title">Protection from the Evil Eye:</div>
          The sukkah and Four Species create protection from{" "}
          <strong>עין הרע</strong> (evil eye), just as the Clouds of Glory
          protected Israel from Bilam's attempted curse. Each shake creates a
          barrier of holy consciousness around you. The three mentions of
          "sukkah" in the Torah equal the gematria of <strong>רגע</strong>{" "}
          (moment) - the daily moment of divine anger that the evil eye tries to
          exploit. Your movements transform this moment of potential
          vulnerability into one of spiritual empowerment.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Spine of Connection - Mind to Heart:
          </div>
          The <strong>לולב</strong> represents your spinal column - the channel
          connecting mind and heart. As you shake it, visualize divine
          consciousness flowing from your intellect down through your spine into
          your heart, then spreading to all your limbs. The lulav binds together
          with <strong>הדסים</strong> and <strong>ערבות</strong> because it
          contains the root of unity between all separations, awakening "one
          heart to our Father in Heaven" throughout your entire being.
        </div>

        <div className="mystical-note">
          <div className="note-title">Descent of Patriarchal Holiness:</div>
          The three <strong>הדסים</strong> (myrtles) represent the three
          Patriarchs whose holiness descends through joy to the lowest levels.
          When you shake toward the different directions, you're drawing the
          elevated <strong>מידות</strong> of <strong>חסד, גבורה, ותפארת</strong>{" "}
          down to your feet - the <strong>מידות</strong> of{" "}
          <strong>נצח, הוד, יסוד</strong>. This shows that your joy in mitzvot
          isn't merely "joy of the feet" but channels supreme holiness from the
          highest levels into physical action.
        </div>

        <div className="mystical-note">
          <div className="note-title">Spreading into Seventy Languages:</div>
          The <strong>ערבות</strong> (willows) represent the spreading of divine
          unity into all seventy languages and nations. <strong>ערבה</strong> is
          the acronym for <strong>ע׳ רבה</strong> (Great Seventy), corresponding
          to the large <strong>ע</strong> in <strong>שמע ישראל</strong>. When
          you shake the willows, you're extending the proclamation of divine
          oneness into every corner of creation, preparing the world for the
          revelation when all nations will recognize the one Creator.
        </div>

        <div className="mystical-note">
          <div className="note-title">Weapons of Holy War:</div>
          The Zohar calls the Four Species <strong>מאני קרבא</strong> (weapons
          of battle) against the <strong>סטרא אחרא</strong>. Each shake is
          literally a strike against forces of spiritual impurity. Like the{" "}
          <strong>להט החרב המתהפכת</strong> (flaming sword) that once blocked
          the Tree of Life, your movements create permutations of the divine
          name that transform obstacles into gateways. The{" "}
          <strong>הידור מצוה</strong> (beautification) itself becomes part of
          the "written judgment" against evil.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            Dwelling in the Shadow of Faith - צלא דמהמנותא:
          </div>
          The Zohar calls the sukkah <strong>צלא דמהמנותא</strong> (the shadow
          of faith). Just as your physical shadow reflects every movement you
          make, everything you do in the lower world awakens corresponding
          reactions above. Your sukkah mirrors a <strong>סוכה עליונה</strong>{" "}
          (supernal sukkah) that exists at the highest spiritual level, with no
          barrier between it and the <strong>אור אין סוף</strong> (Infinite
          Light). When you perform the lulav movements within this shadow of
          faith, you're creating perfect correspondence between your physical
          actions and their supernal archetypes, making the infinite accessible
          through the finite.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            From Concealment to Revelation - העלם להתגלות:
          </div>
          Your lulav practice follows the divine pattern of drawing from{" "}
          <strong>העלם</strong> (concealment) to <strong>התגלות</strong>{" "}
          (revelation). In Rosh Hashanah, the <strong>תקיעות שופר</strong>{" "}
          represent <strong>קול בלא דבור</strong> (voice without speech) - pure
          concealment. In Yom Kippur there's partial revelation through prayers
          and afflictions. In Sukkot, you take the Four Species in revelation,
          yet still conceal yourself in the sukkah until{" "}
          <strong>שמיני עצרת</strong> brings complete revelation. Each shake
          draws hidden divine potentials into manifest reality, making the
          concealed accessible to your consciousness.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Four Species as Your Complete Human Anatomy:
          </div>
          The Four Species correspond precisely to human anatomy:{" "}
          <strong>לולב</strong> resembles the spine, <strong>אתרוג</strong> the
          heart, <strong>ערבה</strong> the lips, and <strong>הדס</strong> the
          eyes. This teaches that through Torah study and mitzvah performance,
          you sanctify your entire physical being. When you wave them together,
          you're unifying all your bodily functions in divine service - your
          vision (<strong>הדס</strong>), speech (<strong>ערבה</strong>),
          emotional center (<strong>אתרוג</strong>), and neural system (
          <strong>לולב</strong>) all become vehicles for holiness.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Prophetic Level - Moses as מלאך and Your Lulav:
          </div>
          The Midrash teaches that prophets are called <strong>מלאכים</strong>{" "}
          (angels), and Moses exemplified this: "From his middle up - God, from
          his middle down - man." He would grasp supernal holiness and bring it
          down to Israel through <strong>רצוא ושוב</strong> (running and
          returning). Your lulav movements mirror this prophetic function - you
          wave upward to cleave to supernal levels (<strong>רצוא</strong>), then
          bring the <strong>לולב</strong> toward your heart (
          <strong>שוב</strong>) to channel that holiness into this world. Each
          wave brings down a higher aspect than before, making you a conduit for
          divine influence like Moses.
        </div>

        <div className="mystical-note">
          <div className="note-title">The Hidden Speech of Your Heart:</div>
          There exists <strong>דיבור פנימי והבל פנימי</strong> (inner speech and
          inner breath) that rises from the heart, for <strong>הלב</strong>{" "}
          (heart) has the same letters as <strong>הבל</strong> (breath). This is
          the deeper meaning of <strong>דברתי אני עם לבבי</strong> ("I spoke
          with my heart"). When you bring the lulav toward your heart during{" "}
          <strong>הובאה</strong>, you're connecting to this inner voice - the
          soul's direct communication with the Divine that transcends
          articulated prayer. Your heart speaks constantly to Hashem; the lulav
          movements amplify and sanctify this hidden conversation.
        </div>

        <div className="mystical-note">
          <div className="note-title">Three Within Three - תלת גו תלת:</div>
          Everything in creation follows the pattern <strong>
            תלת גו תלת
          </strong>{" "}
          (three within three), like the letter <strong>למד</strong> which has
          three sections, and like a human being with head, torso, and lower
          body. Even a fetus lies <strong>תלת גו תלת</strong> in its mother's
          womb. Your lulav movements embody this fundamental structure - each
          direction contains beginning, middle, and end phases. This threefold
          pattern connects teacher's intellect to student through analogy, just
          as your movements connect supernal wisdom to your understanding
          through the intermediate realm of action.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Sweetening of 320 Harsh Judgments:
          </div>
          <strong>לב</strong> (heart) multiplied by ten equals{" "}
          <strong>שך</strong> (320), representing the 320 harsh judgments that
          need sweetening. Through drawing from the root via the ten attributes,
          you draw ten holinesses to the heart, thereby sweetening all
          judgments. When you make <strong>הקפות</strong> (circuits) with the
          species, you're symbolically covering the <strong>שכינה</strong> like
          the rooster covers its mate with wings, promising protection. This
          circling motion distributes the sweetening influence throughout all
          320 aspects of potential severity.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Humility of Nothingness - עניוה and אין:
          </div>
          True humility means holding yourself as <strong>אין ואפס</strong>{" "}
          (nothing and naught), constantly remembering that{" "}
          <strong>לית אתר פנוי מיניה</strong> (there is no place devoid of Him).
          One who achieves this nothingness has true joy because he seeks
          nothing for himself, knowing he is nothing. His joy comes purely from
          magnifying divine honor. Through such humility, you draw from the
          supernal source of <strong>אין</strong> (nothingness) that preceded
          creation. This is the deeper meaning of raising and lowering the lulav
          - drawing from <strong>שם אהיה</strong> (the divine name of becoming)
          to <strong>הויה</strong> through the consciousness of{" "}
          <strong>מה ואין</strong>.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The תיומת - Wholeness of Heart and Faith:
          </div>
          If the <strong>תיומת</strong> (center shoot) separates from the lulav,
          it's invalid because your heart must be whole. <strong>לב</strong>{" "}
          means "in the middle" - you unify all limbs to the heart to be
          obedient to the intellect in the brain. <strong>תיומת</strong> relates
          to <strong>תמים תהיה עם ה׳ אלקיך</strong> ("You shall be wholehearted
          with the Lord your God"). In the word <strong>אמת</strong> (truth) are
          beginning (<strong>א</strong>), middle (<strong>מ</strong>), and end (
          <strong>ת</strong>) - your faith must encompass all aspects of
          existence to be complete.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Lulav as Letter ו - Pillar Connecting Heaven and Earth:
          </div>
          The <strong>לולב</strong> is shaped like the letter <strong>ו</strong>{" "}
          (vav), which serves as a pillar and seal connecting heaven and earth.
          Like the verse <strong>צדיק כתמר יפרח</strong> ("The righteous shall
          flourish like a palm tree"), the Sages taught "The world stands on one
          pillar, and righteous is its name." Your lulav becomes this pillar -
          the <strong>ו</strong> that connects all levels of reality, channeling
          divine influence from the highest source down through all worlds to
          manifest in your physical environment.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            Sweetening the 320 Judgments Through Heart-Centered Practice:
          </div>
          <strong>לב</strong> (heart) multiplied by ten equals{" "}
          <strong>שך</strong> (320) - the harsh judgments that need sweetening.
          Through drawing from the supernal root via the ten attributes, you
          draw ten holinesses to your heart, sweetening all judgments. When you
          bring the species toward your heart during <strong>הובאה</strong>,
          you're literally channeling divine mercy into the place where harsh
          judgments are stored, transforming them into vessels for kindness
          through your heartfelt intention and movement.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            לו לב - Directing Your Heart to Hashem:
          </div>
          <strong>לולב</strong> can be read as <strong>לו לב</strong> ("to Him
          the heart"). The primary purpose is subjugating your heart to Hashem
          so that your heart obeys your intellect in the brain. Since the{" "}
          <strong>לולב</strong> alludes to the head and brain rising above, you
          bless <strong>על נטילת לולב</strong> ("on taking the lulav") because
          from there comes the primary intellect that causes you to submit to
          your mind's decisions. Your movements integrate divine consciousness
          from brain through heart to all limbs.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            The Bound and the Unbound - אגודים ואחוזים:
          </div>
          The <strong>לולב</strong> below is bound with{" "}
          <strong>הדסים וערבות</strong>, while above it extends outside the
          species bound with it. This teaches that like Moses who grasped
          himself above to supernal holiness and brought down holiness to Israel
          (who are <strong>אגודים ואחוזים אלה באלה</strong> - "bound and
          connected to each other"), your lulav connects the unbound infinite
          (above) with the bound finite (below). Each time you wave, you bring
          down a higher aspect than before to this bound world.
        </div>

        <div className="mystical-note">
          <div className="note-title">
            From אין (Nothingness) to Manifestation:
          </div>
          Through true humility - holding yourself as <strong>אין ואפס</strong>{" "}
          (nothing and naught) - you can draw from the supernal source of{" "}
          <strong>אין</strong> (nothingness) that preceded creation. This is
          hinted in the <strong>כוונת שבע עליות הלולב והורדתו</strong>{" "}
          (intention of seven raisings and lowerings of the lulav) - drawing
          from <strong>שם אהיה במילוי אלפין</strong> to{" "}
          <strong>הויה במילוי אלפין</strong>. Through becoming{" "}
          <strong>מה ואין</strong> (what and nothing), you become a vessel for
          the divine name <strong>אהיה</strong> - the supernal source and will.
        </div>
      </div>
    </div>
  );
};

export default LulavChart;
