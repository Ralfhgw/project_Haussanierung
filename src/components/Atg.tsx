import { useMemo } from 'react'
import './Atg.css'

const atgContent = `
<h2>Kellersanierung durch die Firmen "ATG" und "Die Gartenzwerge"</h2>

        <p>05.07.25, 16:00 - Auftrag für ATG erteilt, über den Herrn Bahr.</p>
        <img src="/images/atg/kontakt-bahr.jpg" alt="" />
        <p>Vermittlung der Firma "Die Gartenzwerge" über den Hern Bahr, damit die Wand für die Innensockelverdichtung
            vorbereitet wird.
            Zu den Arbeiten gehörten zusätzlich:</p>

        <ul>
            <li>Terassen Abriß</li>
            <li>Außenfassade trocken legen und versiegeln</li>
            <li>Entsorgung</li>
            <li>Kellersanierung</li>
        </ul>
        <h3>Chat Verlauf</h3>
        <p>08.07.25, 08:25 - S. Lingreen - Stefan Lindgreen
            sparkasse Rostock
            DE15130500001041876501</p>

        <p>08.07.25, 08:26 - S. Lingreen - PTT-20250708-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250708-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <br><b>Transkript: </b> Als Verwendungszweck bitte angeben. Bauvorhaben Wo sind wir hier Greifswald Bauvorhaben
        Greifswald mit Adresse ne und <strong>7500€ Anzahlung</strong> das ist die Hälfte von den 15000 und falls es
        weniger wird ich
        versuch ich zumindestens dann sag ich Bescheid also Anzahlung 75 und ja dann erstmal danke und bis Donnerstag.
        </p>

        <p>08.07.25, 08:28 - S. Lingreen - PTT-20250708-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250708-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b> Und ganz wichtig, <strong>nicht vergessen, den Schlüssel in den Schrank zu
                verstecken</strong>. So, wir
            fahren jetzt wieder Richtung Rostock, ich fahr dann gleich zur EGN und alles also wie gesagt das Geld muss
            nachher gleich drauf sein, also
            bitte gleich drum kümmern damit ich die Materialien bezahlen kann damit der LKW morgen losfährt.
            <strong>Container
                wird auch morgen Abend gestellt</strong> damit sie Bescheid wissen.
        </p>

        <p>08.07.25, 08:56 - S. Lingreen - PTT-20250708-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250708-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, bitte den Schlüssel denn morgen doch schon, wenn es irgendwie geht,
            nachmittags reinlegen, weil die Jungs werden dann kommen und schon mal alles in die Garage legen, die ganzen
            Stemmhammer, unsere Eimer, unsere
            Putzschienen alles was wir so brauchen Kellerhammer, dass das alles schon vor Ort ist morgen, dass wir dann
            auch rechtzeitig anfangen können, also bitte so ab 14 15:00 Uhr den Schlüssel morgen wenn es irgendwie geht
            schon in der Schublade rein.
        </p>

        <p>08.07.25, 09:03 - R. Neumann - IMG-20250708-WA0004.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250708-WA0004.jpg" alt="" />
        <p>Überweisung wurde getätigt. Den Schlüssel lege ich schon heute Abend in die Schublade.</p>

        <p>08.07.25, 09:04 - S. Lingreen - Super danke</p>

        <p>09.07.25, 07:02 - S. Lingreen -
            <a href="/images/atg/2025-04-Rechnung-01.pdf" target="_blank" rel="noopener noreferrer"
                download="2025-04-Rechnung-01.pdf">
                2025-04-Rechnung-01.pdf
            </a> (Datei angehängt)
        </p>

        </p>09.07.25, 07:05 - S. Lingreen - PTT-20250709-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250709-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich wollte gestern Abend nicht mehr stören, ich habe mir das
            gestern Abend jetzt noch mal alles durchgerechnet eingekauft, also ich komme jetzt schon auf eine Summe von
            <strong>9800€ nur an Materialskosten, die ich gestern alle eingekauft habe</strong>, dann kommen die die Fahrten noch hin und
            her, hin und her die Jungs, die arbeiten, die Arbeitsstunden, eigentlich müsste es viel teurer werden, aber ich lass das jetzt bei den 15 so wie wir es
            auch ausgemacht haben, ich muss es trotzdem per Rechnung machen weil sonst geht mir das Steuerbüro auf den Sack.
            Und das ist mir auch zu risikoreif, weil das einfach ja zu weit weg ist. Wenn uns da von den Nachbarn oder
            irgendjemand anscheißt oder da irgendeine Kontrolle kommt, dann lieber auf Nummer sicher und 100%, damit das alles
            ordentlich und alles seinen Gang geht. Jetzt ist das Herr Neumann, seien Sie bitte so gut, überweisen Sie mir die Restsumme,
            auch, dass dass die Rechnung vollständig bezahlt ist. Aber wie gesagt, ich habe schon über neuneinhalb 1000€ jetzt ausgegeben,
            bin schon wieder in Vorleistung und wir wollen das ja zu 100% machen. Also bitte ich Sie darum, diese Restzahlung
            heute auch noch aufs Konto drauf zu schießen. Dann kann ich ruhiger schlafen, weil wie gesagt, ich habe ihn
            ja gestern Abend schon gestern am Tag schon gesagt, dass ich 2 bauten noch ausstehen habe über 35000 und ich
            bin einfach so ein bisschen gebranntes Kind, wenn sie damit einverstanden sind, dann schreiben Sie mir kurz
            einmal durch, dass sie den Rest heute noch überweisen, dass das bis heute Mittag noch drauf ist, weil es ein
            kurzer Bank Tag ist. Wenn sie nicht damit einverstanden sind, akzeptieren wir das auch. Dann würde ich die
            7500€ zurück überweisen, die sie mir überwiesen haben und würde dann den Auftrag canceln. Nicht böse
            gemeint, nehmen Sie das bitte auch nicht böse, aber wie gesagt, ich wurde schon von 3 komplett beschissen
            und der Weg ist ja auch eine ganz schöne Strecke, also wie gesagt sind sie damit einverstanden, machen Sie
            die Überweisung heute morgen noch klar machen Sie das fertig sobald ich den. Von ihnen den Screenshot Wiederhabe, dass das restliche Geld auch
            überwiesen ist. Fangen wir dann auch sofort an. Dann fahren heute die LKWS ein, die Container kommen, wir
            kommen mit dem ganzen Material und morgen früh geht das dann auch sofort los, aber anders kann ich das
            einfach nicht machen, so Herr Neumann, schöne Grüße an Ihre Frau und ich bin jetzt ein bisschen schwer zu
            erreichen, da ich auf der Baustelle bin, es reicht mir einfach, wenn sie mir schreiben, das machen wir so.
            Oder schicken sie die 7500 zurück, dann mache ich das auch oder sie überweisen es und dann geht das morgens
            sofort los. Aber günstiger werden sie es definitiv nicht kriegen. Ich habe das wie gesagt noch mal
            durchgerechnet gestern, also normalerweise würden wir auch so auf schon mal auf 19 20000 kommen und dann
            kommen ja noch die Mehrwertsteuer drauf ne also das ist schon echt günstig, ein super Angebot was ich ihnen da gemacht
            habe. Überlegen Sie sich das einfach ne Liebe Grüße.</p>

        <p>09.07.25, 07:57 - R. Neumann - IMG-20250709-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250709-WA0002.jpg" alt="" />
        <p>Der Restbetrag ging als normale Überweisung raus. <strong>Ich möchte aber dann auch eine Bauabnahme mit Ihnen</strong>.</p>

        <p>09.07.25, 07:58 - S. Lingreen - PTT-20250709-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250709-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, das ist ja klar, Herr Neumann, erstmal bin ich sowieso jeden Tag mit vor Ort und
            sobald alles fertig ist, wird auch eine vernünftige Bauabnahme gemacht. Das das gibt die Regel so vor, das macht man ja so ne OK vielen
            Dank und wir telefonieren uns dann heut Nachmittag noch mal Bescheid, dann kläre ich das jetzt alles, dass dann alles
            rüberkommt ne super Dankeschön.</p>

        <p>11.07.25, 07:47 - R. Neumann - Hallo Stefan, wann fangt Ihr heute an?</p>

        <p>11.07.25, 07:53 - S. Lingreen - IMG-20250711-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250711-WA0000.jpg" alt="" />

        <p>11.07.25, 07:53 - S. Lingreen - Es gibt nur noch irre auf der Welt 🤦‍♂️

        <p>11.07.25, 09:58 - R. Neumann - Zähle ich auch dazu 🤔 - das wird schon wieder. Meine Oma hat immer gesagt,
            bis zur
            Hochzeit ist alles wieder gut, aber das passt bei dir vielleicht nicht...</p>

        <p>11.07.25, 09:59 - S. Lingreen - PTT-20250711-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250711-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Nein, Herr Neumann, sie zählen natürlich nicht dazu. Verheiratet bin ich schon, also wird
            das mit dem Verheilen wohl ein bisschen länger dauern.</p>

        <p>11.07.25, 10:03 - S. Lingreen - PTT-20250711-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250711-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Aber Herr Neumann, das hat meine Oma auch immer früher zu mir gesagt. Ich war ja so n
            kleiner auch so n kleiner Raufbold ne und kam immer mit irgendwelchen Verletzungen nach Hause. Na gut, ich wünsch Ihnen erstmal noch n
            schönen Tag und freu mich auf die Baustelle am Montag, da freu ich mich wirklich drauf mal was anderes, wir machen ja immer
            Außenfassaden, Außenfassaden und haben ganz selten mal so Kellerräume oder sonstiges und da sind wir ja vom
            Wetter und nichts abhängig. Also ich freu mich wirklich da drauf auch mal bei euch da in der Gegend zu sein, ne?</p>

        <p>13.07.25, 20:17 - S. Lingreen - PTT-20250713-WA0004.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250713-WA0004.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Abend, Herr Neumann, ich wollte Ihnen nur schnell mitteilen, dass es <strong>erst ab
            Dienstag bei uns losgeht</strong>. Das tut mir total leid, aber ich hab durch den Schlag aufs Auge, also an die Schläfe, auch ne leichte
            Gehirnerschütterung erlitten. Ich muss morgen noch mal zum Arzt, muss mir alles ärztlich protokollieren lassen wegen der Anzeige
            und wegen, Na ja, Schmerzensgeld, Sie wissen schon und dieses ganze et cetera und dann geht das Dienstag früh los, ich mein
            Wir haben ja keinen Zeitdruck, ne wir haben bis Mitte nächsten Monat Zeit und wir brauchen höchstens ne 7 bis 10 Tage.
            Also von daher ist der Zeitdruck gar nicht so hoch. Die Materialien habe ich jetzt zu mir liefern lassen, die sind
            bei mir schon alle auf dem Anhänger rauf, wir sind völlig beladen und sind dann am Dienstag um 8 mit voller Mannschaft da.
            Ich werde natürlich die 23 Tage nicht mitarbeiten, weil mir das total weh tut, aber meine Angestellten sind alle da,
            also 3 Leute stemmen dann erstmal die Wände, alles sauber, alles weg und dann geht's dann los mit Gewebe einlegen
            und alles rein machen ich wollte nur schnell Bescheid sagen, wünsche noch einen Rest schönen Sonntag.</p>

        <p>15.07.25, 07:26 - R. Neumann - IMG-20250715-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0001.jpg" alt="" />
        Plan vom Erdgeschoss

        <p>15.07.25, 07:27 - R. Neumann - IMG-20250715-WA0003.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0003.jpg" alt="" />
        <p>Plan vom Kellergeschoss</p>

        <p>15.07.25, 07:35 - S. Lingreen - Danke</p>

        <p>15.07.25, 08:04 - S. Lingreen -
            <a href="/images/atg/2025-05-Rechnung-02.pdf" target="_blank" rel="noopener noreferrer"
                download="2025-05-Rechnung-02.pdf">
                2025-05-Rechnung-02.pdf
            </a> (Datei angehängt)
        </p>

        <p>15.07.25, 08:05 - S. Lingreen - PTT-20250715-WA0004.opus (Datei angehängt)
            <br><audio controls>
                <source src="/images/atg/PTT-20250715-WA0004.opus" type="audio/ogg; codecs=opus" />
            </audio>
        <p><b>Transkript: </b>So, Herr Neumann, hier ist die Rechnung, die schicke ich Ihnen jetzt, weil wir auf Nummer
            sicher gehen wollen, wenn uns da jemand wirklich an den Kahn pissen will, haben wir beide die Rechnung vorliegen, die überweisen sie
            auch bitte so wie sie ist. Wenn wir mit den Bautätigkeiten fertig sind bei ihnen am Haus, dann nehmen wir beide unsere
            Rechnung, zerreißen die und dann <strong>zahle ich ihnen die Mehrwertsteuern wieder zurück</strong>, wenn kein
            Anschiss kam und wir nicht kontrolliert worden sind und ja bitte als Sofortüberweisung. Weil jetzt fahr ich im Baumarkt, jetzt wird's richtig teuer. Also diese ganze Sockelabsicht und das wird jetzt richtig richtig teuer. Also bitte ich Sie wirklich das als
            <strong>Sofortüberweisung</strong> zu machen, damit das dann losgeht. So und dann sehen wir uns <strong>morgen in alter Frische</strong> auf der Baustelle, wenn sie vorbeikommen müssen sie ja nicht, aber wir sind morgen da und ich kümmere mich jetzt um alle Materialien, alles kümmere mich dann den Ganzen heute drum und wie gesagt das Geld muss da sein damit ich es bezahlen kann, weil denn Vorleistung
            kann ich nicht gehen.
        </p>

        <p>15.07.25, 08:06 - S. Lingreen - PTT-20250715-WA0005.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0005.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Denn die letzte Überweisung, die sie getätigt haben, die ganz normale Überweisung, hat 2
            Tage gedauert. Also da hab ich wirklich 2 Tage drauf gewartet bis das da war. Bei der Summe. <strong>So lange können wir nicht warten, wir
            wollen ja anfangen, also bitte Echtzeit.</strong></p>

        <p>15.07.25, 08:17 - S. Lingreen - PTT-20250715-WA0006.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0006.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Denn wie gesagt, <strong>Aufträge gibt es hier wie Sand am Meer. Mein Handy klingelt jeden Tag</strong>.
        </p>

        <p>15.07.25, 08:17 - S. Lingreen - PTT-20250715-WA0007.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0007.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Also Herr Neuer, noch mal zum Verständnis ne, alles <strong>was Sie jetzt überwiesen haben hat nur
            mit dem Keller zu tun, das hat mit außen nichts zu tun. Wir müssen aber außen machen damit wir den Keller dann im September
            komplett fertig machen können, wenn das von außen wieder reinkommt das die Feuchtigkeit dann bringt mir das alles nichts</strong>,
            dann kann ich das ganze Material wieder abreißen, also vertrauen müssen wir haben wenn wir keine keine Vertrauensbasis da ist,
            dann überweise ich ihnen jetzt auch den Rest wieder zurück und dann lassen wir das. Also wie gesagt so ne
            Gespräche möchte ich also das ist nicht böse gemeint und nimm sie es noch nicht böse aber so ne Gespräche möchte ich
            gar nicht führen. <strong>Also wir haben noch nie jemanden beschissen, noch nie jemanden betrogen.</strong> Wir haben noch nie ne
            Baustelle nicht gemacht und wie gesagt, ich bin zweimal beschissen worden, also dreimal eigentlich und das lasse ich auf
            mich nicht mehr zukommen, ne, ja ansonsten überweise ich ihnen das, was Sie mir vorher bewiesen haben auch wieder zurück und
            dann sehen Sie also wir haben nicht vor jemanden zu bescheißen, absolut nicht und das machen wir auch nicht, aber
            solche Gespräche, das ist ja ist für mich vertrauensunwürdig.</p>

        <p>15.07.25, 08:23 - S. Lingreen - PTT-20250715-WA0008.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0008.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Das einzigste was ich Ihnen noch anbieten kann 15 sie überweisen 15, das ist ne teilzahlung und den Rest bei Beendigung. Dann hab ich wenigstens die die Materialskosten und alles drin also das ist so das was ich jetzt noch anbieten kann, aber mehr kann ich dir auch nicht machen, aber wie gesagt Vertrauen ist das A und O, sonst bringt das alles
            nichts.</p>

        <p>15.07.25, 08:49 - R. Neumann - In der bezahlten Rechnung sind keine genauen Arbeiten definiert. Sie können dieses Geld nehmen, um innen im Keller die Löcher zu stopfen und die Außenfassade zu machen. Es ist aus meiner Sicht so der richtige Weg. Ich möchte, dass für die eingezahlte Summe eine Leistung erbracht wird, bevor dann der zweite Transfer erfolgt. Ich möchte eine Rechnung, in der die Art der Bautätigkeiten erkennbar sind.</p>

        <p>15.07.25, 08:50 - R. Neumann - Ich möchte auch darauf hinweisen, dass es durchaus üblich ist, in Vorleistung zu gehen, aber nicht die volle Summe zu bezahlen.</p>

        <p>15.07.25, 08:56 - S. Lingreen - PTT-20250715-WA0009.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0009.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, dann machen wir es aber auch genauso. Also ich trete dann von dem Vertrag zurück, ich überweise ihnen
            ihr Geld zurück, weil irgendwie wollen sie es ja einfach nicht kapieren, wenn ich Ihnen die Stunden und alles berechne, ich setze Ihnen da 6 Mann auf den Hof, 6 Mann pro Stunde kostet jede einzelne Person, die bei ihnen steht, 60€ dann rechnen sie sich mal aus bei 6 Personen mal 8 Stunden am Tag, was ich ihnen dann in Rechnung stelle, dann können wir den Vertrag nämlich zerreißen, Herr Neumann, und dann kommt eine ganz andere Summe dabei raus, dann kommen wir nämlich auch auf unsere. 25 26000 weil in 567 Stunden ist das Ding dann nicht erledigt, also völliger Blödsinn. Was Sie mir hier schreiben. Also ich trete von dem Ding dann zurück, ich überweis ihm die Summe zurück und dann hat sich das für mich erledigt, weil das ist völliger Blödsinn, ne also das Macht kein normaler Bauunternehmer, der der Fasan oder so Macht, macht ihn immer eine Vollrechnung laut Absprache das und das und das. Also so kenn ich das hier schon seit 10 Jahren und so machen wir es immer, weil kein Mensch ich mein wenn sie möchten und sie möchten jede Stunde einzeln bezahlen, dann machen wir das ne, aber dann liegen wir bei 25 28000 und nicht mehr bei 15 verstehen Sie mal das ne wie gesagt. Entscheiden Sie das? Ich habe, dass das so ein Ausmaß hier hat, ich komme darüber, mach, tu mir das an, guck mir das an, mach Versuch für Sie eine Lösung zu finden, damit sie nicht noch mehr Ärger haben und dann muss ich mir hier solche Dinger reinhauen, dass wie gesagt, wir haben ihr Haus nicht nötig, es gibt Tausende Baustellen hier in der Gegend, wir haben es nicht nötig das zu machen, ne, also Herr Neumann, überlegen Sie noch mal, was Sie da schreiben. Und ich werde nicht das Geld nehmen für die Kellerräume, weil wie gesagt, davon sind schon von den 15000 sind alleine 11000€ schon materialskosten weg. Sie können sich nicht vorstellen was das alles kostet am Material, wie auch, sie sind nicht in der Branche, aber erlauben sich sowas zu schreiben, also soll ich jetzt die ganze Außenfassade alles an Materialien für die die paar 1000 die jetzt noch übrig sind, die Bauleistung sind für die Jungs für für alles was wir machen soll ich dann in die Außenfassade stecken? Mache ich nicht. Also wie gesagt, dann trete ich definitiv. Vom Vertrag zurück überweise Ihnen das Geld zurück. Und dann hat sich das für mich erstmal erledigt, weil es ist wahnsinnig, was ich hier lesen muss. Also sie haben gar keine Ahnung von der von der Materie und ich habe Ihnen das schon angeboten. Machen sie eine Teilzahlung, sie müssen ja nicht alles machen, aber ich fange nichts außen an oder ich nehme auch kein Geld von den Kellerräumen um dann außen auch noch weiterzumachen definitiv nicht, sie wissen gar nicht was das alles kostet. Wenn ich ne Vollrechnung schreiben würde, ne Vollrechnung für draußen richtig draußen ne, dann würden wir schon. Ich bin Ihnen jetzt schon wieder entgegen gekommen, dann würden wir locker bei 25000 landen, alleine mit dem Abriss der Terrasse an allen Drum und dran ne wir vergessen Sie mal nicht, wir versuchen Ihnen zu helfen und wollen
            Ihnen nicht schaden, also finde ich Wahnsinn. Also ich bin nachher in einem Büro gegen 18:00 Uhr, dann überweise ich das Geld zurück und dann ist gut ich möchte mich mit ihnen nicht streiten, sie sind ganz nett und Ihre Frau ist auch ne ganz tolle Frau. Und Streiten hab ich gar nicht nötig. <strong>Baustellen wie gesagt gibt es wie Sand am Meer, schönen Tag noch Herr Neumann.</strong></p>

        <p>15.07.25, 10:31 - S. Lingreen - PTT-20250715-WA0010.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0010.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, ich habe mir das jetzt noch mal hier alles durchgerechnet und geguckt und Materialien
            durchgerechnet. Also ich möchte gar nicht böse mit ihnen sein und ich verstehe auch Ihre Seite, wenn ich das Geld von dem Geld
            nehme, was sie mir schon geschickt haben, fehlen mir trotzdem zu den Baumaterialien für draußen immer noch 6000 also ich
            mache ihnen jetzt das Angebot, sie zahlen mir eine Teilrechnung von der, den ich ihnen gesendet habe, von diesen 6000. Den
            Rest nehme ich von dem Restgeld von der ersten Rechnung. Dann kriege ich alle Baumaterialien zusammen und dann können wir anfangen mit der Voraussetzung, dass wenn denn der Keller unten fertig ist und wir die Hälfte der Arbeit oben fertig geschafft haben, dass dann die nächste Zahlung kommt, das biete ich Ihnen jetzt noch mal vernünftig an, weil eigentlich ist es ja schade, wenn wir da so böswillig auseinander gehen, das wäre, das will ja keiner, sie wollen fertig werden, also noch mal zum verstehen.</p>

        <p>15.07.25, 10:31 - S. Lingreen - PTT-20250715-WA0011.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0011.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Also geben Sie mir bitte Bescheid, ob ich das jetzt alles in die Wege leiten soll oder
            nicht, weil uns rennt ja sonst die Zeit weg.</p>

        <p>15.07.25, 10:32 - S. Lingreen - PTT-20250715-WA0012.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0012.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Und ich denke, das ist für beide Seiten eine vernünftige Lösung.</p>

        <p>15.07.25, 10:38 - S. Lingreen - ?</p>

        <p>15.07.25, 11:21 - S. Lingreen - IMG-20250715-WA0013.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0013.jpg" alt="" />

        <p>15.07.25, 11:22 - S. Lingreen - PTT-20250715-WA0014.opus (Datei angehängt)
            <br><audio controls>
                <source src="/images/atg/PTT-20250715-WA0014.opus" type="audio/ogg; codecs=opus" />
            </audio>
        <p><b>Transkript: </b>So, Herr Neumann, das ist meine Gewerbeanmeldung in Tessin, weil wir ja eine lange Zeit in Tessin gewohnt haben. Da habe ich mein Gewerbe angemeldet gehabt, damit sie das sehen.</p>

        <p>15.07.25, 11:22 - S. Lingreen - IMG-20250715-WA0015.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0015.jpg" alt="" />

        <p>15.07.25, 11:22 - S. Lingreen - IMG-20250715-WA0016.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0016.jpg" alt="" />

        <p>15.07.25, 11:22 - S. Lingreen - PTT-20250715-WA0017.opus (Datei angehängt)
            <br><audio controls>
                <source src="/images/atg/PTT-20250715-WA0017.opus" type="audio/ogg; codecs=opus" />
            </audio>
        <p><b>Transkript: </b>Und hier ist meine Gewerbeummeldung nach Sanitz, weil wir uns ja ein Haus geholt haben und umgezogen sind. Also wie Sie sehen, bei uns ist alles in Ordnung, ne alles gut.</p>

        <p>15.07.25, 11:22 - S. Lingreen - VID-20250715-WA0018.mp4 (Datei angehängt)
            <br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250715-WA0018.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250715-WA0018.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>15.07.25, 11:23 - S. Lingreen - PTT-20250715-WA0019.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0019.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, und damit hoffe ich, sind das jetzt auch Beweise genug und vertrauen genug, weil ich komme da auch n bisschen       auf den Kopf gestoßen vor ne, ich biete mich ja nicht an Ihnen das alles zu machen oder generell und dann so und so so jetzt haben sie Beweise, hier haben Sie meine Gewerbeanmeldung und das auch alles vernünftig ist. Das ist alles eingetragen, wir sind ne ja und ne Website und so brauchen wir nicht um Gottes Willen dann wird mein Telefon gar nicht mehr ausgehen ich bin froh, dass das so ist wie es ist.</p>

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0020.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0020.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0021.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0021.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0022.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0022.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0023.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0023.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0024.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0024.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0025.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0025.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0026.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0026.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0027.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0027.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0028.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0028.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0029.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0029.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0030.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0030.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0031.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0031.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0032.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0032.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0033.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0033.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0034.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0034.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0035.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0035.jpg" alt="" />

        <p>15.07.25, 11:38 - S. Lingreen - IMG-20250715-WA0036.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0036.jpg" alt="" />

        <p>15.07.25, 11:40 - S. Lingreen - PTT-20250715-WA0037.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0037.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Und da mal so ein kleine paar Beispiele von uns, da waren wir in Kühlungsborn und das war der größte Auftrag, den
            ich bis jetzt hatte, habe ich ein ganzes Hotel gemacht, das war ein Summ, das können sie sich nicht vorstellen und gucken sie mal das Bruchfertige kaputte Ding an und gucken sie sich mal die Fotos an, wo es fertig ist. Also da waren wir ganze 8 Wochen, aber das war die schönste Baustelle die ich je hatte und auch dieses Hotel haben wir top Arbeit zurückgelassen. Also da können Sie sich sehen, was das für ein alter Schuppen war und wie er aussah, wo er fertig war. Also ihr Haus wird auch glänzen, ne so mehr Beweise brauchen Sie nicht.</p>

        <p>15.07.25, 11:42 - S. Lingreen - PTT-20250715-WA0038.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0038.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So dann Herr Neumann, dann bedanke ich mich, dass wir uns doch wieder geeinigt haben und ich besorge jetzt,
            telefoniere jetzt wegen Katharina und den ganzen Rotz, dass das dann endlich auch mal losgeht, ne super.</p>

        <p>15.07.25, 12:34 - R. Neumann - IMG-20250715-WA0041.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250715-WA0041.jpg" alt="" />

        <p>Ich freue mich darauf, dass ihr loslegen könnt und hoffe, dass wir einen gute Zusammenarbeit haben.</p>

        <p>15.07.25, 12:34 - S. Lingreen - PTT-20250715-WA0042.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250715-WA0042.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Vielen Dank Herr Neumann. Ich bedanke mich auch und sorry, dass wir da so aneinander geraten sind, aber das muss ja
            nicht sein, aber man kann sich ja auch mal die Meinung sagen, ne, das gehört zur Welt dazu ne alles klar vielen Dank.</p>

        <p>16.07.25, 17:51 - R. Neumann - Hallo Stefan, hast du ein Update für uns? Kannst du einschätzen, wann ihr anfangt? vG
        </p>

        <p>16.07.25, 17:52 - S. Lingreen - PTT-20250716-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250716-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Tag, Herr Neumann. Ja, wie besprochen, wo wir nebeneinander standen, am Freitag ist der erste Tag, Freitag
            sind wir zu dritt da, dann Samstag sind wir auch da und dann Montag bis Freitag die ganze nächste Woche wie wir's besprochen hatten vor Ort.</p>

        <p>16.07.25, 18:04 - R. Neumann - Prima, wir arbeiten von 07:00 bis 16:00 Uhr. Sollen wir davor oder danach vor Ort sein?

        <p>16.07.25, 18:05 - S. Lingreen - PTT-20250716-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250716-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, das können Sie sich aussuchen, wie Sie wollen, also an dem Tag, wir haben Freitag, ist das Ergebnis, dass wir Freitag im Keller alles weg stemmen, was runter muss und alles wieder sauber machen und dann werden wir das erstmal einsprühen, alles, weil da muss ja ein Primer drauf, damit wir dann überhaupt mit Putz drauf können und Samstag werden wir die ganze Kelleranlage komplett fertig machen
            und vorbereiten für ATR, damit die dann unten den Sockel spritzen können und die ganze nächste Woche ist dann absolut außen Außenfassade. Wenn wir dann die ganze nächste Woche machen und Trasse abreißen, also sie müssen nicht zwingend notwendig vorbeikommen, sie können abends hingucken und mal gucken, selber mal vorbeifahren, aber also, sie können uns ja sowieso nicht helfen, ne, sie können gucken, kommen aber
            zwingend notwendig ist es nicht, das könnt ihr machen wie ihr wollt.</p>

        <p>18.07.25, 08:32 - S. Lingreen - VID-20250718-WA0000.mp4 (Datei angehängt)
            <br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250718-WA0000.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250718-WA0000.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>Guten Morgen wir sind fleißig 👍wie besprochen..</p>

        <p>18.07.25, 08:34 - S. Lingreen - PTT-20250718-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250718-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So Guten Morgen, Herr Neumann. Wir sind jetzt unten fleißig, wir nehmen jetzt alles runter von der Wand, was runtermuss, dann sprühen wir die Wand mit einem, wie soll ich Ihnen sagen das mit einem Haftgrund ein das muss dann 10 Stunden ziehen wenn wir das durch haben und dann morgen früh putzen wir die Wände alle wieder zu damit dann die damit die anderen ihre Sockelabdichtung machen können ne dass sie
            Bescheid wissen also bitte nicht die Wände anfassen das Zeug ist so ein bisschen giftig, dass sie Bescheid wissen. Ansonsten sehen wir uns dann ja entweder morgen früh oder morgen Abend wie sie wollen. Morgen sind wir auch den ganzen Tag wieder da. Also heute ist wie besprochen alles von der Wände runter was runter muss, 
            dann grundieren wir die ganzen Wände, morgen früh machen wir die Wände unten wieder zu damit.atr
            oder wie auch immer sie da heißen, die Abdichtung machen können und morgen fangen wir dann im Gegenzug an,
            wenn wir alles zugespachtelt haben und alles wieder fertig haben, fangen wir damit außen an ne Ich wünsche
            Ihnen einen schönen Tag.</p>

        <p>18.07.25, 08:38 - R. Neumann - Wow, ich bin beeindruckt. Wenn wir uns heute Nachmittag nicht mehr sehen, dann auf jeden Fall morgen.</p>

        <p>18.07.25, 08:39 - S. Lingreen - versprochen ist versprochen 👍</p>

        <p>20.07.25, 18:44 - R. Neumann - </p>

        <p>20.07.25, 18:44 - R. Neumann - IMG-20250720-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250720-WA0000.jpg" alt="" />
        <p>Hallo Herr Lindgreen, wir haben die Baufreiheit hergestellt, d.h. die Dornengewächse und Pflanzen entfernt, die untersten Stufen der Treppe entfernt, die Terasse freigeräumt, die größeren, obenliegenden Steine an den Außenwände entfernt, damit diese nicht im Erdreich verschwinden. Ihnen noch einen schönen Restsonntag..</p>

        <p>20.07.25, 18:44 - R. Neumann - IMG-20250720-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250720-WA0002.jpg" alt="" />

        <p>20.07.25, 18:44 - R. Neumann - IMG-20250720-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250720-WA0001.jpg" alt="" />

        <p>20.07.25, 18:44 - R. Neumann - IMG-20250720-WA0003.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250720-WA0003.jpg" alt="" />

        <p>21.07.25, 07:43 - S. Lingreen - PTT-20250721-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250721-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich konnte gar nicht mehr antworten. Gestern erstmal vielen vielen Dank für ihre
            Vorarbeit, ich bin absolut begeistert, sieht super aus Herr Neumann, <strong>wir sind heute aber erst später da, ich habe vergessen,
            dass ich heute in Rostock die Gerichtsverhandlung habe von dem einen, der mir noch so viel Geld schuldet</strong>, da ist heute
            Verhandlung und da hoffe ich, da drücken sie mir die Daumen, dass dich da. Das endlich abschließen kann und mein
            Geld bekomme. Aber dann sind wir nachher da und ich werde heute noch mal. Deswegen bitte ich Sie, wenn Sie heute dahin
            kommen oder später wir uns nicht sehen. Heute lassen sie die Fenster zu, ich werde noch mal einen Bautrockner unten in den
            Keller reinstellen, um dass der noch mal für 12 Stunden die Feuchtigkeit aus der Wände zieht, damit uns das auch
            alles schön antrocknet also bitte im ganzen Haus die Fenster zulassen.</p>

        <p>21.07.25, 07:44 - S. Lingreen - PTT-20250721-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250721-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ach so und 1 noch ganz wichtig ist, dass wir uns <strong>mindestens am Mittwoch sehen, weil Mittwoch ist der Elektriker mit
            uns mit wegen die Steckdose und wie Kabel und alles</strong>, dass wir die Schächte schon mal so machen können. Also Mittwoch ist der da und der kommt kann ich ihnen genau sagen, der kommt um 14:00 Uhr und bleibt bis 16:00 Uhr, vielleicht können sie sich das irgendwie freihalten, falls Sie doch eine andere Uhrzeit brauchen, dann lassen Sie mich das wissen wann sie dann können, dann sage ich denen Bescheid, dann muss der so kommen wie sie können ne alles klar.</p>

        <p>22.07.25, 07:04 - S. Lingreen - PTT-20250722-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250722-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Sie haben sich gestern überhaupt nicht mehr gemeldet. Ich brauche von Ihnen eine Zeit,
            wann Sie morgen auf der Baustelle sind, wegen dem Elektriker, sagen Sie mir dann bitte noch mal Bescheid.
        </p>

        <p>23.07.25, 07:14 - S. Lingreen - PTT-20250723-WA0000.opus (Datei angehängt)
            <br><audio controls>
                <source src="/images/atg/PTT-20250723-WA0000.opus" type="audio/ogg; codecs=opus" />
            </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Wir sind heute Vormittag Richter, das Auto schon wieder in der Werkstatt, aber ich werde
            um 17:00 Uhr den Termin wahrnehmen mit dem Elektriker, also wir sehen uns dann trotzdem im Haus und morgen geht's wie gewohnt weiter, Marder oder irgendwas reingegangen, wir wissen es nicht, es leuchten wieder alle leuchten, ich flipp aus aber das Wetter ist ja auch hier zum Platzen, es schüttet aus Eimern also morgen geht's wie gewohnt weiter und den Termin um 17:00 Uhr halten wir trotzdem fest. Was wollte ich noch sagen? Und Firma Alba hat auch immer noch keinen Container geliefert. Ich flipp da aus, da ruf ich jetzt immer noch mal an, wir bleiben ja im Schutt liegen, aber da kümmer ich mich jetzt drum, alles klar, Herr Neumann, dann bis um 17:00 Uhr.</p>

        <p>23.07.25, 11:09 - S. Lingreen - VID-20250723-WA0001.mp4 (Datei angehängt)
            <br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250723-WA0001.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250723-WA0001.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>23.07.25, 11:19 - S. Lingreen - PTT-20250723-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250723-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, der Elektriker hat für heute abgesagt. Der sagt bei dem Dreck Wetter fährt er von Tessin nicht bis
            hier hoch, was ja auch noch nicht so schlimm ist, weil Elektrik muss ja jetzt auch noch nicht gemacht werden. Erstmal müssen ja jetzt erstmal die Soppelprofis kommen ne und das alles fertig machen also der kommt heute nicht, damit fällt der Termin um 17:00 Uhr flach aber so n kleines Herr Linkring super find ich gut ne das wär auch mal schön Herr Neumann sie sind so stumpf ne schönen Tag noch.</p>

        <p>23.07.25, 11:19 - S. Lingreen - PTT-20250723-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250723-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ansonsten finden Sie uns morgen den ganzen Tag, da die Wände schön machen. Ne was heißt den ganzen Tag wenn wir
            fertig sind sind wir fertig ne also wir fangen morgen gegen 08:30 Uhr 09:00 Uhr an und dann ziehen wir durch bis wir fertig sind.</p>

        <p>23.07.25, 12:51 - R. Neumann - Alles klar, dann sehen wir uns morgen. Vielen Dank für das Update. Sehr schön, dass ihr wieder für Ordnung gesorgt habt.</p>

        <p>23.07.25, 15:18 - S. Lingreen - 👍🤗</p>

        <p>24.07.25, 17:03 - R. Neumann - </p>

        <p>24.07.25, 17:03 - R. Neumann - IMG-20250724-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0001.jpg" alt="" />
        <p>Hallo Herr Lingreen, wir haben für die Raucher in Ihrem Team einen Aschenbecher hingestellt. Die Kippen auf dem Grundstück sind nicht erwünscht.

        <p>24.07.25, 17:03 - R. Neumann - IMG-20250724-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0002.jpg" alt="" />

        <p>24.07.25, 17:03 - R. Neumann - IMG-20250724-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0000.jpg" alt="" />

        <p>24.07.25, 17:04 - R. Neumann - IMG-20250724-WA0003.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0003.jpg" alt="" />
        <p>Im Keller steht ein Kasten mit Getränken zur freien Verfügung.</p>

        <p>24.07.25, 17:09 - R. Neumann -

        <p>24.07.25, 17:09 - R. Neumann - IMG-20250724-WA0004.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0003.jpg" alt="" />
        <p>Es gibt an den Wänden noch einige Stellen, an denen der Putz nicht fest ist. Auch ein Klopfen an der Wand offenbart einige hohle Stellen. Ich nehme an, dass es noch ausgebessert wird.</p>

        <p>24.07.25, 17:09 - R. Neumann - IMG-20250724-WA0005.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0005.jpg" alt="" />

        <p>24.07.25, 17:09 - R. Neumann - IMG-20250724-WA0006.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0006.jpg" alt="" />

        <p>24.07.25, 17:09 - R. Neumann - IMG-20250724-WA0008.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0008.jpg" alt="" />

        <p>24.07.25, 17:09 - R. Neumann - IMG-20250724-WA0007.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250724-WA0007.jpg" alt="" />

        <p>24.07.25, 17:11 - S. Lingreen - PTT-20250724-WA0009.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250724-WA0009.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, alles, was Sie da noch nicht zugeputzt sehen, das werden wir auch nicht zuputzen. Wir müssen für AGR
            oder wie sie auch immer heißen 30 Zentimeter die Wände zu putzen, damit sie ihre Bohrung machen können. Danach kommen wir mit Armierungsmörtel, also wir machen die Wände nicht komplett dicht, auf gar keinen Fall, weil wir mit ganz anderen Putz raufgehen. Wir setzen, wir machen nur die Sicherheit, dass die Sockelverdichtung gemacht werden kann, und die haben mit uns heute gesprochen, telefoniert vom Fußboden bis zur Wand, 30 Zentimeter, mehr dürfen wir nicht zuputzen, der Rest wird erst dann gemacht, wenn die Sockelverdichtung fertig ist.</p>

        <p>24.07.25, 17:11 - S. Lingreen - PTT-20250724-WA0010.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250724-WA0010.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Alles was los ist und noch nicht richtig ist, das nehmen wir morgen noch runter und machen das auch neu. Das haben
            wir gestern haben wir heute auch schon festgestellt, dass da noch n paar Dinge gemacht werden müssen, aber wir machen nicht alles komplett dicht, auch nicht die offenen Wände, 30 Zentimeter von Fußboden bis zur Wand, da bohren die und dann kommen wir ja mit der Sockelverdichtung, mit unserer eigenen und mit mit Gewebe und mit ganz anderen Putz, deswegen lassen wir das offen.</p>

        <p>24.07.25, 17:12 - S. Lingreen - PTT-20250724-WA0011.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250724-WA0011.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Und für die Zigaretten. Das tut mir total leid, das werd ich morgen absolut ändern. Ich bin Nichtraucher wenn ich
            was getrunken hab, aber ansonsten ja das werd ich morgen definitiv beobachten, sie brauchen sich keine Sorgen machen, wir wissen was wir tun und morgen sieht das alles ganz anders aus.</p>

        <p>24.07.25, 17:52 - R. Neumann - Ist alles gut, wir haben das so auch verstanden. Momentan ist der Sockel wichtig.

        <p>24.07.25, 17:53 - S. Lingreen - richtig 👍

        <p>24.07.25, 21:35 - S. Lingreen - PTT-20250724-WA0012.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250724-WA0012.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, noch mal vielen, vielen Lieben Dank für die Getränke. Ne, das haben wir vergessen, das ist nicht            selbstverständlich auf dem Bauch, das vergessen immer viele, muss auch nicht sein. Wir haben auch unser eigenes Zeug dabei, aber das ist sehr nett, vielen Dank und liebe Grüße an die Frau.</p>

        <p>28.07.25, 10:01 - R. Neumann - Hallo Herr Lindgreen, ich wollte noch mal sicher gehen. Bleibt es bei dem Termin morgen mit dem Elektriker? War es um 17:00 Uhr? Ich bin zeitlich flexibel. vG</p>

        <p>28.07.25, 10:06 - S. Lingreen - PTT-20250728-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250728-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ja, genau der Termin morgen um 17:00 Uhr, bis jetzt steht ich hab nichts anderes gehört,
            er hat sich auch nicht weiter gemeldet, wir sind morgen sowieso den ganzen Tag da, wieder von 8 bis abends, Wetter ist ja super die Woche und ja dann sehen wir uns morgen um 17:00 Uhr.</p>

        <p>28.07.25, 10:11 - R. Neumann - 👍</p>

        <p>29.07.25, 08:25 - S. Lingreen - PTT-20250729-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250729-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich wollte nur Bescheid sagen, dass wir heute nicht da sind. Mein Papa ist gestern Abend
            ins Krankenhaus gekommen und heute Morgen haben sie festgestellt, dass er Lungenkrebs hat. Sieht überhaupt nicht gut aus, da werden sie verstehen, dass ich da heute. Ein bisschen geknickt bin und nicht auf Baustelle fahre. Der Elektriker ist trotzdem um 17:00 Uhr da, mit dem habe ich telefoniert und dem habe ich auch ihre Telefonnummer gegeben, falls irgendwas sein sollte, dass er sich mit ihm noch mal in Verbindung setzt, aber er sagt Nee das passt. 17:00 Uhr steht im Buch und Wir sind wie gewohnt dann morgen wieder auf Baustelle, aber heute, das ist für mich so eine schockierende Nachricht. Ja, Herr Neumann, Sie wissen Bescheid. Wie gesagt, der Elektriker hat ihre Telefonnummer, wenn was sein sollte, meldet er sich, ansonsten haben sie mit dem um 17:00 Uhr einen Termin am Haus und wir sind morgen wie gewohnt dann
            alle vollständig wieder da. Heute muss ich wirklich ja was soll ich Ihnen sagen, ich bin ich bin geschockt über diese Nachricht.</p>

        <p>29.07.25, 13:25 - S. Lingreen - PTT-20250729-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250729-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, haben Sie schon was vom Elektriker gehört? Weil ich hab jetzt noch mal zweimal angerufen, aber hab ihn
            leider noch nicht ans Telefon gekriegt.</p>

        <p>29.07.25, 13:27 - S. Lingreen - PTT-20250729-WA0004.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250729-WA0004.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Und sagen Sie mir mal einmal kurz, wie Ihre Zeit morgen ist, sehen wir uns auf der Baustelle, sehen wir uns nicht,
            damit ich auch so n bisschen planen kann.</p>

        <p>29.07.25, 13:37 - R. Neumann - Ich bin in dieser Woche jeden Tag dort ...</p>

        <p>29.07.25, 13:38 - S. Lingreen - 👍</p>

        <p>29.07.25, 13:43 - S. Lingreen - PTT-20250729-WA0005.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250729-WA0005.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So der Elektriker hat mich zurückgerufen. Er sagt, das bringt ihm nichts dahin zu fahren, wenn ich nicht da bin. Ab
            wann sind Sie denn Sie sagen, Sie sind jeden Tag jetzt da, ab wann sind Sie denn da zugange, weil wenn wir denn morgen da
            sind, dass er denn dazu stößt, damit ich das jetzt gleich mit ihm besprechen kann, wann wir uns dann morgen treffen können, weil das bringt mir ja auch nichts, wenn sie nicht da sind, und wir sind alle da mit dem Elektriker, also der Elektriker kommt morgen zu uns, der hat frei, jetzt brauche ich nur noch eine Zeit, wann sie denn jeden Tag da sind. Damit das hier endlich mal vorwärts geht, ja einmal bitte noch eine Rückmeldung, damit ich das noch schnell planen kann.</p>

        <p>29.07.25, 13:50 - R. Neumann - 08:00-17:00 Uhr Mo bis Fr</p>

        <p>01.08.25, 07:50 - S. Lingreen - PTT-20250801-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250801-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Sagen Sie mir mal kurz, wie die Wetterlage bei Ihnen aussieht, weil hier fängt es schon
            wieder völlig an zu regnen, weil ich kann absolut die Maschine nicht an die Wand setzen, wenn's feucht ist. Das macht die Maschine kaputt und laut Wetterbericht soll's ab Mittag Nachmittag völlig wieder regnen, ne?</p>

        <p>01.08.25, 11:04 - R. Neumann - IMG-20250801-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250801-WA0002.jpg" alt="" />
        <p>Das wäre der zusätzliche Haufen. Bei uns ist bestes Wetter...</p>

        <p>01.08.25, 11:05 - S. Lingreen - PTT-20250801-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250801-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, Herr Neumann, das passt locker auf den Anhänger. Wir kommen aber auch erst am Nachmittag, der Anhänger ist erst
            um 14:00 Uhr hier, ja das bringt ja trotzdem nichts, die die Wand abzuschleifen, wenn es heute Nachmittag regnet, wir müssen die ja abschleifen und sofort das Remmers drauf, die Sockelversichtungsmasse und die braucht mindestens 12 Stunden Trockenheit, also es bringt nichts für n paar Minuten hinzufahren das zu machen und dann heut Nachmittag stell ich den Anhänger auf den auf den Hof und dann bleibt er auch stehen bis Montag den machen wir komplett voll. Da können wir alles abschleifen. Das ist n Doppelachser, da passt alles drauf, wahrscheinlich sogar noch die halbe Terrasse mit und dann müssen wir nicht dauernd hin und her fahren, alles klar.</p>

        <p>01.08.25, 11:13 - S. Lingreen - PTT-20250801-WA0004.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250801-WA0004.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Aber kurios ist die Wettergrenze also bei uns. Es regnet jetzt nicht in Strömen, aber es regnet. Bei euch ist alles
            trocken, kotzt mich an, aber wir hätten ja trotzdem nicht viel machen können, außer die Terrasse abreißen, so hab ich die Jungs jetzt auf einer anderen Baustelle noch, dann hab ich die auch fertig und dann können wir nur noch uns auf eure Baustelle konzentrieren, dann ist alles nur noch ihr.</p>

        <p>01.08.25, 11:17 - R. Neumann - Das haben wir verstanden, das Abschleifen ist dann bei allerschönsten Wetter und der Anhänger wird heute gebracht. Gibt es eine Idee für den Elektriker? Ich habe bisher noch keinen gefunden...werde aber weiter
            schauen...</p>

        <p>01.08.25, 11:18 - S. Lingreen - PTT-20250801-WA0006.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250801-WA0006.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, Elektriker, Termin ist nächste Woche Donnerstag. Ich habe jetzt die zweite Subfirma von mir genommen,
            der ist auch hier aus Kessin und der kommt auch zu mir rüber, den anderen habe ich jetzt gesagt, dass sich das erledigt hat, weil das ja auch peinlich ist. Also Donnerstag nächste Woche, er konnte mir noch nicht genau sagen welche Uhrzeit wir sind ja sowieso da, aber der sagt mir genau am Montag Bescheid wann er Donnerstag kommt, das ist die Firma Ladwig und ja die sind perfekt. Wie gesagt, den anderen hab ich rausgeschmissen, das hat keinen Sinn, da muss man nicht betteln, wenn er keine Termine wahrnehmen will und kein Geld verdienen will, dann ja dann soll er es lassen, ne.</p>

        <p>01.08.25, 11:18 - R. Neumann - VID-20250801-WA0007.mp4 (Datei angehängt)
            Wie Sommer...<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250801-WA0007.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250801-WA0007.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>01.08.25, 11:18 - S. Lingreen - PTT-20250801-WA0008.opus (Datei angehängt)
            <br><audio controls>
                <source src="/images/atg/PTT-20250801-WA0008.opus" type="audio/ogg; codecs=opus" />
            </audio>
        <p><b>Transkript: </b>Und wie gesagt, der Anhänger wird heute noch gebracht. Den bringen wir aufs Grundstück und der bleibt stehen, bis
            wir alles durch haben. Das ist n Zweiachser großer Anhänger, da passt wirklich alles drauf und den nehmen wir auch erst dann wieder mit, wenn alles abgeschliffen ist, der ganze Bauschutt weg ist und dann ja.</p>

        <p>01.08.25, 11:19 - S. Lingreen - PTT-20250801-WA0009.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250801-WA0009.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, Wahnsinn. Ja, perfektes Wetter ne und der Wetterbericht sagt regen Regen ab Mittag jetzt ab 12:00 Uhr soll's ja
            richtig Regen geben na ja, wir wollen kein Risiko eingeben, wir wollen da kein Geld verschenken ne okay Herr Neumann, falls wir es nicht sehen, Sie wissen Bescheid, der Anhänger wird heute raufgestellt und dann bleibt ja so lange bis der Knappe voll ist.</p>

        <p>01.08.25, 13:08 - S. Lingreen - VID-20250801-WA0010.mp4 (Datei angehängt)<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250801-WA0010.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250801-WA0010.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>01.08.25, 13:08 - S. Lingreen - VID-20250801-WA0011.mp4 (Datei angehängt)<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250801-WA0011.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250801-WA0011.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>02.08.25, 08:41 - R. Neumann - Wir haben verstanden, dass der Container jetzt da sein soll. Wir sind irritiert...
        </p>

        <p>02.08.25, 08:42 - S. Lingreen - PTT-20250802-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250802-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, das hat bei uns geschüttet wie aus Eimern. Keiner meiner Baujungs ist losgefahren und hat den und kein
            Container, sondern ein Anhänger, Herr Neumann von Container ist schon lange nicht mehr die Sprache, wir bringen unser doppelachser Anhänger mit hin, aber gestern hier hast du die Hand vor Augen nicht gesehen, so hat das Geplattert ich hab die nicht losgeschickt, mal sehen wie es heute ist, ob sie den heute noch hinbringen wollen, ansonsten bringen wir ihn am Montag Vormittag mit wenn wir da sind weil da soll es ja einigermaßen trocken sein Montag reißen wir die Terrasse
            weg.</p>

        <p>02.08.25, 08:42 - S. Lingreen - PTT-20250802-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250802-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ach so guten Morgen, Herr Neumann.</p>

        <p>02.08.25, 08:43 - S. Lingreen - PTT-20250802-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250802-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Also lassen sie alles so schön liegen, wie es ist. Wir kümmern uns um die Entsorgung. Montag ist alles weg, so             schönes Wochenende, Herr Neumann.</p>

        <p>02.08.25, 08:46 - R. Neumann - Wir haben volles Verständnis dafür, wenn es nicht klappt. Aber bitte informieren Sie uns über Planänderungen.</p>

        <p>02.08.25, 08:47 - R. Neumann - Ich wünsche Ihnen ein schönes Wochenende.</p>

        <p>02.08.25, 08:47 - S. Lingreen - okay...danke schön</p>

        <p>04.08.25, 08:27 - S. Lingreen - PTT-20250804-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250804-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Einmal zum Bescheid sagen, wie sie das ja möchten, also wir sind erst ab Mittwoch wieder
            da, hier regnet es schon wieder wie bekloppt und ja, Mittwoch, Donnerstag, Freitag soll das Wetter super werden und dann
            sind wir ab Mittwoch früh um 8 wieder da. Morgen habe ich sowieso einen Krankenhausarzttermin, da wird's bei mir nichts werden und dann Mittwoch wie gewohnt es regnet. Und dann bringen wir auch den Anhänger mit, weil wenn wir jetzt den Anhänger hinstellen, den Bauschuh drauf machen. Das regnet alles voll, das wird noch schwerer, das ist alles scheiße, so kann ich Mittwoch gleich die Wände abschleifen, dann alles rauf auf den Anhänger, gleich die Terrasse mit rauf, alles was rauf geht, dann haben wir mit einem Rutschen alles weg, also sie wissen Bescheid, Mittwoch wieder ab 08:00 Uhr sind wir da liebe Grüße</p>

        <p>04.08.25, 14:03 - R. Neumann - Vielen Dank für die Info. Wir sind wahrscheinlich ab Donnerstag dort.</p>

        <p>04.08.25, 14:10 - S. Lingreen - PTT-20250804-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250804-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, noch ne kurze Absprache. Sie sagt, die Markise hinten dürfen wir die denn
            abbauen? Ja ne können wir
            runternehmen.</p>

        <p>04.08.25, 14:10 - S. Lingreen - PTT-20250804-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250804-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio> 
        <p><b>Transkript: </b>Weil wir wollen am Mittwoch die ganze Terrasse wegnehmen. Dann muss ja die Markise auch abgeschraubt werden, wenn
            sie das nicht schon längst jetzt alleine getan haben.</p>

        <p>04.08.25, 14:43 - R. Neumann - Ja, die Markise habe ich schon etwas gelockert. Diese sollte sich leicht abbauen lassen. Eine Leiter steht draußen und eine zweite ist noch im Wohnzimmer. Haltet die Einzelteile der Markise bitte zusammen. Sie kann dann erst mal unter dem Carport liegen. Wir sollten noch mal telefonieren, wenn ihr dort seid. vG</p>

        <p>04.08.25, 14:44 - S. Lingreen - ok so machen wir das ...</p>

        <p>06.08.25, 08:32 - S. Lingreen - PTT-20250806-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250806-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich habe ganz vergessen, gestern Bescheid zu sagen. Also heute ist noch keiner da. Ich
            habe heute noch mal krankentau Krankenhausaufenthalt, ich werde ja ein paar Monaten am Herz operiert und dann machen sie ein paar Tests und gestern haben meine Werte nicht ganz so bestimmt, da muss ich heute noch mal hin und morgen kommt der neue Transporter endlich von unserer Firma, weil sie sehen ja wir kommen immer mit einem kleinen Auto angefahren, weil vor ein paar Wochen ist unser Transporter kaputt gegangen und ich musste mir einen neuen bestellen, der wird morgen auch ausgeliefert. Und dann geht's endlich ruckzuck wieder völlig weiter. Ich könnte die Jungs so schicken, aber ich habe immer, ich habe immer so ein schlechtes Gefühl bei so Baustellen wie bei Ihnen, wo alles vernünftig und richtig gemacht werden muss, die Jungs alleine hinzuschicken, weil sie wissen ja, wenn wenn der Chef nicht guckt, dann geht das alles, Zack, zack, zack und dann wird da was rüber geschmiert und das will ich nicht, ich will dass das bei euch alles vernünftig läuft und somit sind wir dann erst am Freitag da mit allen Jungs und in alter Frische ja ich wollte nur Bescheid sagen also so haben Sie das ja gesagt, bitte einfach Bescheid sagen und dann ist alles gut.</p>

        <p>06.08.25, 11:29 - S. Lingreen - PTT-20250806-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250806-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, wenn wir uns am Freitag sehen, soll ich Ihnen denn nur eine Leckerlichkeit mitbringen, weil die
            Schweine kommen ja jetzt zerlegt zurück und dann haben wir noch einen schönen Hirsch, einen Rotwildhirsch. Vielleicht möchten
            Sie davon ein schönes Stück haben, weil sie essen nicht so viel Fleisch zu Hause, aber so ein kleines Gourmetstück.</p>

        <p>06.08.25, 11:30 - S. Lingreen - IMG-20250806-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250806-WA0002.jpg" alt="" />

        <p>06.08.25, 11:30 - S. Lingreen - rodwild</p>

        <p>06.08.25, 14:42 - R. Neumann - Hallo Herr Lindgreen, bei uns besteht kein Fleischbedarf, aber Danke für das Angebot.
            Ich habe ihre Kontaktdaten an den Herrn Ulrich weitergeleitet, der ein Auge auf den Ausbau des Hauses wirft. Bitte sprechen Sie mit ihm, damit er up-to-date ist. Wir sind ab morgen wieder im Haus. vG</p>

        <p>08.08.25, 09:10 - S. Lingreen - PTT-20250808-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250808-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich habe sie versucht, sie jetzt zweimal zu erreichen, leider ohne Erfolg. Erfolg nicht
            verfolgt, ich stehe hier auf der Baustelle, gerade weil wir Baustellenabnahme haben von der letzten, wo ich ihnen erzählt habe, dass wir fertig werden müssen und dann ist ihre nur noch dran und da ist der Elektriker jetzt hier dabei, deswegen haben wir versucht sie zu erreichen, um einen Termin für nächste Woche Mittwoch zu bestätigen zu lassen Mittwoch um 09:00 Uhr oder Mittwoch um 16:00 Uhr das können Sie sich dann aussuchen, wann es Ihnen am besten passt. Und ja, mehr wollte ich eigentlich gar nicht. Nur Nachfragen, ob Ihnen das Recht ist, dann auf den anderen, vielleicht Elektriker, konnten wir uns ja nicht verlassen. Jetzt habe ich ja den neuen hier geholt, der mit mir jetzt hier die Abnahme macht und ja, da schreiben sie mir dann bitte noch mal durch.</p>

        <p>08.08.25, 12:43 - S. Lingreen - PTT-20250808-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250808-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Auf jeden Fall brauche ich dann ein bisschen Platz im Carport, um die ganzen Materialien dahin zu stapeln. Aber den
            Schutt, den sie da hingelegt haben, den machen wir dann noch auf dem Anhänger rauf. Dann haben wir ja Platz. </p>

        <p>08.08.25, 12:43 - S. Lingreen - PTT-20250808-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250808-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Also Herr Neumann, noch sind wir auf der Baustelle. Wir warten noch auf den einen letzten Gutachter, die lassen sich
            auf sich warten hier, das ist einfach ne Frechheit, ich kann ihnen nicht genau sagen, wann wir heute auftauchen, aber auf jeden Fall tauchen wir heute noch auf, wir stellen den großen Anhänger auf jeden Fall noch ab und den ganzen armierungsmörtel Gewebe und alles was wir dann nächste Woche bei Ihnen brauchen, werden wir dann heute noch bringen, aber ich kann ihnen nicht genau sagen wann, aber ich sag Ihnen natürlich Bescheid, dass sie immer wissen und auf dem Laufenden sind, ne gut wissen Sie Bescheid.</p>

        <p>08.08.25, 14:59 - R. Neumann - Wir sind bis 15:30 Uhr vor Ort.</p>

        <p>09.08.25, 08:47 - S. Lingreen - PTT-20250809-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250809-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich habe gar nicht geschafft, vergessen, Zurückzuschreiben ja, wir waren noch bis 16:00
            Uhr nach knapp 17:00 Uhr auf Baustelle, bis der Gutachter kam. Ein Fenster war undicht, hat die Luftigkeitsprüfung nicht
            überstanden, jetzt dürfen wir das Fenster heute morgen rausnehmen, komplett neu einsetzen, neu neu versiegeln und
            dann sind wir da durch und dann werden wir am Nachmittag bei euch sein für 23 Stunden, vielleicht auch 4 und dann geht's
            Montag weiter bin ich froh wenn die Baustelle hier zu Ende ist. Dass sie Bescheid wissen, im Moment, also heute definitiv. Gestern, ist ja keiner mehr Rübergefahren, das war zu spät, und dann fangen wir an, Anhänger lassen wir stehen, Materialien haben wir geladen und dann ab nächste Woche sehen sie uns jeden Tag von früh bis spät, bis wir alles fertig haben außer den Keller, den können wir ja nicht sofort beginnen.</p> 

        <p>10.08.25, 11:16 - R. Neumann - Guten Tag Herr Lindgreen, uns läuft die Zeit davon. Bitte teilen Sie uns VERBINDLICH mit, wann Sie ab morgen die Arbeiten an unserem Haus wieder aufnehmen Mein zweiwöchiger Urlaub ist nun beendet. Ab morgen ist meine Erreichbarkeit nur sporadisch gegeben. Den Termin (Mi 16:00 Uhr) mit dem Elektriker nehmen wir in jedem Fall wahr.</p>

        <p>10.08.25, 19:28 - S. Lingreen - PTT-20250810-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250810-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Abend, Herr Neumann, einmal Rücksprache auf ihre whatsapp, die Zeit welche Zeit läuft weg, wir haben
            ausgemacht unten die Kellerräume sind fertig, außer die eine kleine Wand, die machen wir fertig, dass die Leute ihre Maßnahmen
            machen kann um die Sockelverdichtung zu machen, oben haben wir gar keinen Terminplan ausgemacht wann oder überhaupt
            was fertig werden soll oder fertig wird ne das ist das erste. Herr Neumann, Wir sind die Woche da und die nächste Woche
            da. Ich werde Ihnen nicht sagen, ich bin morgen da, ich bin übermorgen da oder ich mache mich hier feste Pläne mit
            ihnen, weil das muss ich nicht, ich entscheide, wann ich entscheide wo und ich scheide, wie wenn meine Baustellen fertig
            sind. Ich habe ihnen gesagt letzte Woche, wir haben jetzt 14 Tage eingeplant ab morgen 14 Tage.</p>

        <p>11.08.25, 16:58 - S. Lingreen - PTT-20250811-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250811-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, ein kleiner Zwischenbericht heute war leider niemand da, weil wir einen kleinen, also nicht ich
            mein Fahrrad, der sonst mehr mit uns fährt, dem ist ein Wildschwein reingelaufen, aber gar nicht schlimm, nichts passiert so für sie. Der Plan Morgen sind wir den ganzen Tag da, reißen die komplette Terrasse weg, entsorgen die Terrasse und versuchen den ganzen Schutt mitzubringen, der da sonst noch rumliegt und am Mittwoch? Werden wir dann die Wände außen schleifen, wenn wir die Maschine wieder haben, weil die Maschine musste ich mir allein, die hat die andere Firma natürlich wieder zurückgenommen, weil die auch arbeiten haben und die Maschine Krieg ich am Mittwoch wieder zum Wände abschleifen so, das ist der Plan. Donnerstag wollen wir dann links, rechts und hinten, soweit wir aufgeräumt haben, einmal sockelabdichtung machen, den Sockel aufbuddeln und ja, dann werden wir mal sehen, dass wir bis
            Freitag alles durcharmiert haben, also der Plan steht.</p>

        <p>11.08.25, 19:32 - R. Neumann - Vielen Dank für das Update. Bitte entsorgen Sie den Sockelsand, da es eine neue Füllung gibt.</p>

        <p>11.08.25, 19:42 - S. Lingreen - Danke für die Antwort...👍</p>

        <p>12.08.25, 12:57 - S. Lingreen - IMG-20250812-WA0004.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250812-WA0004.jpg" alt="" />

        <p>12.08.25, 12:57 - S. Lingreen - IMG-20250812-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250812-WA0002.jpg" alt="" />

        <p>12.08.25, 12:57 - S. Lingreen - IMG-20250812-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250812-WA0000.jpg" alt="" />

        <p>12.08.25, 12:57 - S. Lingreen - IMG-20250812-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250812-WA0001.jpg" alt="" />

        <p>12.08.25, 12:57 - S. Lingreen - IMG-20250812-WA0003.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250812-WA0003.jpg" alt="" />

        <p>12.08.25, 12:57 - S. Lingreen - Hier ist alles nach Plan 👍</p>

        <p>12.08.25, 13:42 - S. Lingreen - VID-20250812-WA0006.mp4 (Datei angehängt)<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250812-WA0006.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250812-WA0006.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>12.08.25, 13:42 - S. Lingreen - PTT-20250812-WA0007.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250812-WA0007.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, ein kleines Update. Ihre Frau war ja da, sie wird ihnen noch berichten, hier läuft soweit alles
            nach Plan. Wir haben uns gegen meinen Anhänger entschieden, weil das doch so viel auf der Terrasse ist, dass wir doch
            einen Container bestellt haben, wahrscheinlich noch ein Zweiter kommen muss. Ja, Sie sehen ja die Terrasse oberweiz haben
            wir jetzt weiter weggerissen, an der Seiten sind wir jetzt alle Steine bei und die Platten haben wir so gut wie alle
            oben vernünftig runtergekriegt war viel schneiden und viel machen aber haben wir hingekriegt. Und für uns ist jetzt definitiv Feierabend. Wir sind platt, die Sonne macht uns fertig und morgen früh sind wir wohl schon um 6 hier, weil wir dann auch morgen früher Feierabend machen, weil es morgen richtig heiß werden soll und dann werden wir die Terrasse morgen zum Einstürzen bringen, dann ist alles weg und dann hauen wir auch alles in Container rein. Super Herr Neumann, Sie wissen Bescheid, sie können sich ja dann noch mal melden, wenn irgendwas unschlüssig ist.</p>

        <p>12.08.25, 21:53 - R. Neumann - IMG-20250812-WA0008.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250812-WA0008.jpg" alt="" />
        Vielen Dank für euren heutigen Einsatz. Wir würden diese Steine und Betonplatten aufheben und für die Gartengestaltung nehmen. Von den Bodenplatten der Terasse, die ihr schon gestapelt habt, werden wir die besten raussuchen. Wir sind dann morgen um 16:00 Uhr dort. vG</p>

        <p>13.08.25, 09:58 - S. Lingreen - PTT-20250813-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250813-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Wie immer sind wir fleißig, wir sind heute morgen schon um 7 hier gewesen, um der Hitze
            n bisschen auszuweichen, der Elektriker war eben gerade da, spontan, also den können wir auch vergessen, Sie brauchen ihren Termin nicht wahrnehmen heute Nachmittag, der schafft das nicht vor Ende Dezember, Anfang Januar im Haus überhaupt irgendwas zu machen, das wird für sie zu spät sein. Ich werd mich heute Nachmittag mal hinsetzen heute bisschen auf den Atem und werde mal hier in. Im Dorf Rumtelefonieren es gibt ja hier auch genug Elektriker, ob wir da nicht einen hier aus der Gegend bekommen. Er sagt auch so wie der andere Elektriker, der an die Anfahrt ist einfach zu weit, ne immerhin und her hin und her ja also versuche ich sie mal in Greifswald hier in Elektriker zu kriegen, also ist wirklich nicht einfach, die sind auch alle absolut ausgebucht ne na gut dass sie Bescheid wissen also 16:00 Uhr der
            Termin ist damit auch nicht.</p>

        <p>13.08.25, 09:58 - S. Lingreen - IMG-20250813-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0001.jpg" alt="" />

        <p>13.08.25, 09:58 - S. Lingreen - IMG-20250813-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0002.jpgg" alt="" />

        <p>13.08.25, 09:58 - S. Lingreen - IMG-20250813-WA0003.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0003.jpg" alt="" />

        <p>13.08.25, 09:59 - S. Lingreen - IMG-20250813-WA0004.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0004.jpg" alt="" />

        <p>13.08.25, 09:59 - S. Lingreen - IMG-20250813-WA0005.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0005.jpg" alt="" />

        <p>13.08.25, 09:59 - S. Lingreen - IMG-20250813-WA0006.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0006.jpg" alt="" />

        <p>13.08.25, 09:59 - S. Lingreen - IMG-20250813-WA0007.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0007.jpg" alt="" />

        <p>13.08.25, 09:59 - S. Lingreen - IMG-20250813-WA0008.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0008.jpg" alt="" />

        <p>13.08.25, 10:00 - S. Lingreen - IMG-20250813-WA0009.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0009.jpg" alt="" />

        <p>13.08.25, 18:31 - R. Neumann - IMG-20250813-WA0011.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250813-WA0011.jpg" alt="" />
        <p>Vielen Dank für euren Einsatz heute. Wir haben unter dem Carport Platz gemacht. Bedient euch auch gern an den
            Getränken im Keller...</p>

        <p>13.08.25, 18:33 - S. Lingreen - PTT-20250813-WA0012.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250813-WA0012.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Tag, Herr Neumann. Ja, das machen wir. Ich habe schon Wasser getrunken und die Jungs schon Brause, da trinken
            wir eifrig eifrig raus, ist ja heiß wie Sau, morgen geht's weiter, ich musste mir jetzt erst mal heute 130 Kilo
            stemmgerät holen, weil wir davon ausgehen, dass die Terrassenplatte in Estrich gegossen ist und dann, dass da Bewährung drin
            ist. Also dass da, wie soll ich's erklären, Ach, sie wissen schon, wie ich das meine, da ist definitiv Eisen Eisen reingelegt worden als als Bewährung. Die Platte, da müssen wir einen riesengroßen Stämme nehmen, um die auseinander zu kriegen, aber die wird morgen auch weg sein. Und ja, vielen, vielen Dank, dass ihr unterm Carport das weggemacht habt, das wollten wir eigentlich morgen in Angriff nehmen, aber das hilft uns natürlich sehr und ja, morgen geht's weiter und dann müssen wir gucken, uns noch mal unterhalten morgen, was wird aus dem Sand, weil das ist ja ein Haufen Sand da unter unter der. Unter der Terrasse entweder sie sagen ne plane irgendwohin und dann tut man das auf dem Haufen, weil man das noch mal nutzen kann, wenn sie den neuen Boden machen unten im Keller, weil das ist ja sehr viel Kies, den kann
            man mit Zement mischen und dann hat man super Boden und spart Geld oder sie sagen zweiter Container und Weg mit dem ganzen Zeug ne ansonsten erstmal liebe Grüße und sie sehen das geht vorwärts wir sind wir sind sehr guter Dinge, das Wetter spielt völlig mit.</p>

        <p>15.08.25, 10:32 - R. Neumann - Hallo Herr Lindgreen, wenn Sie einen Kontakt zu einem Elektriker brauchen, dann würden wir auch versuchen, einen Kontakt zu finden. Wie geht es nun weiter? Seid ihr sicher, dass ihr die Platte runterbekommt? Wir könnten die Paletten für die Steine gebrauchen. Sollen wir schon den Schutt im Keller in den Anhänger (Container) entsorgen? Ich bin heute den gesamten Tag hier. vG</p>

        <p>15.08.25, 10:45 - S. Lingreen - PTT-20250815-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250815-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Hallo Herr Neumann, ja, wir sind sicher, wir kriegen die Platte runter. Das Problem ist einfach nur, dass wir uns
            erstmal eine 30 Kilo stemmhammer holen mussten. Moin und einen 30 Kilo Stemmhammer holen mussten, damit wir die Platte überhaupt runterkriegen, den kriege ich heute Nachmittag geliefert und dann habe ich mir von einem Freund noch eine Steinsäge geholt, also eine Benzin steinsäge damit wir die Terrassen in Scheiben schneiden können damit das auch besser in den Container passt. Und damit kriegen wir es auf jeden Fall runter. Also da geht es definitiv dann erst auf Montag weiter. Wir sind Montag wieder da, die ganze Woche durch und dann auch mit 6 Mann nicht nur zu dritt, dann fangen die einen schon mit den mit den Mauern an alles runter zu machen und neu zu, also zu Versockeln zu
            verdichten. Na alles was gemacht werden muss, aber Montag fällt die ganze Terrasse, die schneiden mir n Scheibchen und Stücke und
            dann ist sie weg mit einem Elektriker hab ich jetzt schon soweit Kontakt, der wollte mich auch am Montag noch mal zurückrufen und dann ja müssen wir weitersehen wenn das wieder nicht klappt dann.</p>

        <p>15.08.25, 11:01 - R. Neumann - 👍</p>

        <p>15.08.25, 11:10 - S. Lingreen - PTT-20250815-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250815-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ach so, Herr Neumann, ich bring am Montag n Grill mit, Wir wollten n klein bisschen grillen, das hatte ich ja schon
            mal gefragt ob das OK wär, weil einer unserer Kollegen hat Geburtstag und dann machen wir so n kleines Mittag Mittag grillen wenn das für sie OK ist.</p>

        <p>15.08.25, 13:05 - R. Neumann - Gern könnt ihr auch grillen...</p>
        <p>18.08.25, Tag - <strong>ATG Start mit der Sockelverdichtung innen</strong></p>
        <p>18.08.25, 16:09 - R. Neumann - Hallo Herr Lingreen, wie sieht es aus, am Freitag war noch alles klar? Immerhin war ATG heute pünktlich am Arbeitsort. Wir haben den Schutt aus dem Keller entsorgt. Zusätzlich haben wir den Putz von den Granitfliesen entfernt und ebenfalls entsorgt. Es wird definitiv noch ein weiterer Container benötigt. Ein Stückchen Terasse passt aber noch rein. vG</p>

        <p>18.08.25, 18:33 - R. Neumann - Es war auf jeden Fall eine gute Idee, dass sie den Container bestellt haben. Der Anhänger
            hätte bestimmt nicht gereicht. Ich würde mich gern mit Ihnen heute oder morgen früh unterhalten...</p>

        <p>19.08.25, 13:31 - S. Lingreen - PTT-20250819-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250819-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, ich habe das jetzt mal soweit hier alles durchgeklärt, so wie wir es auch besprochen haben,
            entschuldige ich mich noch mal dafür, dass das, dass ich nicht Bescheid gesagt habe, wann wir kommen und wann wir nicht kommen. Da haben Sie völlig recht, dann lieber sagen, ich kann es nicht genau sagen, ich muss es besorgen und dann melde ich mich, so passen Sie auf das mit den Steine habe ich geklärt, die werden in 14 Tagen geliefert, wenn dann nachher noch wir dann anfangen mit dem Sockel draußen, weil wie gesagt wie ATR jetzt schon sagte bloß noch nichts. Zu machen  damit, dass er ein bisschen abtrocknen kann, alles drum und dran, also sockelsteine brauchen wir erst in 34 Wochen so die Farbe habe ich bestellt, so wie sie es mir beauftragt haben, die kommt nächste Woche an und das heißt
            ich fahr jetzt noch mal rüber zu dem mit dem Baggern, weil der Bagger sollte ja heute kommen, der aber kommen sollte es zu groß, das können wir nicht machen, dann machen wir ihre ganze Einfahrt kaputt und den ganzen Rasen, das wollen wir ja auch nicht, wir wollen ja nur einen Kleinen haben.</p>

        <p>19.08.25, 15:13 - S. Lingreen - PTT-20250819-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250819-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So noch mal kurz zum Abgleich. Ich bin jetzt von den Bauherren da weg mit dem Baggern Freitag Vormittag krieg ich
            den bestellten kleinen Bagger mit Pressarm, also mit Stemmhammerarm und einmal mit Kneife, damit wir auch die ganzen Na wie soll ich sagen mit Halle durchschneiden kann Freitag um 10:00 Uhr wird der geliefert also das heißt ganz normal wir  werden komplett Freitag da sein und dann. Wahrscheinlich verspreche ich nicht Samstag. Auch das müssen die Jungs immer für sich alleine entscheiden, ob sie Samstag was machen wollen oder nicht, aber Freitag definitiv den ganzen Tag und reißen dann die Terrasse weg. Nimm dann Donnerstag werde ich alleine vorbeikommen, da weiß ich keine Uhrzeit oder mit Willi hier mit meinem Fahrer machen noch schnell den Bauschutt weg für ja den Sockelspritzschutz was ich ihnen auch gesagt habe, damit der Container am Donnerstag Nachmittag vernünftig getauscht werden kann, da ist der Plan.
        </p>

        <p>19.08.25, 16:15 - R. Neumann - Ok, alles klar.</p>

        <p>21.08.25, 12:22 - S. Lingreen - IMG-20250821-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250821-WA0000.jpg" alt="" />

        <p>21.08.25, 12:22 - S. Lingreen - IMG-20250821-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250821-WA0001.jpg" alt="" />

        <p>21.08.25, 12:23 - S. Lingreen - PTT-20250821-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250821-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Tag, Herr Neumann, du, ich bin gerade mal unterwegs wegen den Sockelsteinen, jetzt noch mal, weil ich jetzt
            noch kein Ergebnis gefunden habe, außer das, was ich Ihnen gezeigt habe, aber das ist ja nicht so, wie ich mir das vorstelle, von der Qualität her. Jetzt habe ich Ihnen noch mal 2 proben hier geschickt, ich finde die Linke natürlich sehr, sehr, sehr geil, also sehr, sehr, sehr hübsch, weil sie ja das Haus auch wieder so ein bisschen innimmt. Orange Ton oder wie man das nennt, Rotton oder so auch halten. Da würden die linken Steine sehr gut zu passen, aber ich brauche von euch natürlich ein ja oder Nein und ja wäre schön, wenn Sie sich dazu äußern. Ansonsten schicke ich noch ein paar andere Probe, also gibt es auch noch 1000 andere, aber es soll halt eher auch zu der Wand passen ne wenn das die Farbe ein bisschen so ist, werden die Linken tatsächlich, also würde super bei euch aussehen, ne?</p>

        <p>21.08.25, 12:37 - S. Lingreen - PTT-20250821-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250821-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So mit dem Containerdienst habe ich jetzt eben auch noch mal gesprochen. Sie können mir nicht versprechen, dass sie
            ihn heute Weg wegnehmen, morgen oder Montag, das werden Sie sehen, wie sie es schaffen, aber noch ist er halb leer und morgen sind wir auf jeden Fall erstmal vor Ort, so wie wir schon besprochen haben, morgen Nachmittag soll ja der kleine Bagger geliefert werden, wir werden morgen ja den Sockelschutz da weg machen, alles vorbereiten, die Wände abschleifen, dass die schon mal Luft haben, dann habe ich wie besprochen auch schon. Den Trocknungsautomaten gebucht, damit wir in 3 Wochen unten im Keller den Trockner reinstellen können, damit wir dann endlich zu Rande kommen und da die nächsten paar Wochen auch fertig werden. Ne wie gesagt 3 Wochen müssen wir jetzt warten bis es aushärtet unten, aber dann stellen wir den Trockner rein für 23 Tage und dann fangen wir da unten an das fertig zu machen und da sind wir auch locker oben schon fertig Feuer ne Herr Neumann Sie wissen Bescheid ich kümmere mich sie sehen aber zaubern kann ich ja auch nicht ne?</p>

        <p>21.08.25, 20:57 - R. Neumann - IMG-20250821-WA0006.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250821-WA0006.jpg" alt="" />
        <p>Hallo Herr Lindgreen, wir würden gern diesen roten Granit-Split nehmen.</p>

        <p>22.08.25, Tag - <strong>ATG Arbeitsabschluss mit der Sockelverdichtung innen</strong></p>
        <p>25.08.25, 09:26 - S. Lingreen - PTT-20250825-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250825-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio> 
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Also wir sind ab Mittwoch wieder da, das hat er jetzt, so Freitag, mit der Terrasse        nicht geklappt. Ich kann den Stemmbagger erst ab Mittwoch wieder haben, Mittwoch um 9 wird der geliefert, ich lieg sowieso flach, ich habe mir schön Magen Darm am Wochenende eingefahren, also ich bin erst ab Mittwoch wieder da, die Jungs sind morgen da machen schon mal an der Fassade links und rechts und die Steine alles weg und schrubben das alles ab und stemmen schon soweit auf der Terrasse rum. Vorne die ganzen Steine, alles was da noch weg soll vor der Terrasse und die Mauer auch und fang schon mal an unten drunter den Sand so weit weg zu tragen wie sie können und ich bin dann ab Mittwoch wieder da. Ich weiß nicht ob es bei euch auch da regnet. Ihre Kieselsteine habe ich bestellt, sie haben die
            leider hier nicht so auf Lager, die musst ich bestellen, das ist aber auch nicht schlimm, die werden auch schon am Freitag geliefert, ansonsten gibt's nichts Neues, ansonsten sehen wir uns am Mittwoch ab 08:00 Uhr bin ich wieder da wie gesagt die Jungs.</p>

        <p>25.08.25, 09:26 - S. Lingreen - PTT-20250825-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250825-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Und die Frage noch im Keller, sind die Jungs fertig geworden, ist da alles fertig, dass ich dann schon mal für n
            Ende nächste Woche die Baumaschine stellen kann zur Trocknung für die Innenräume?</p>

        <p>25.08.25, 10:57 - R. Neumann - Hallo Herr Lindgreen, ATG hat alle Kellerräume soweit bearbeitet und Ende nächster Woche könnte man vielleicht beginnend in der Garage den Bautrockner anwerfen.

        <p>25.08.25, 10:58 - S. Lingreen - PTT-20250825-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250825-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Genau, Herr Mann, Herr Neumann, so ist mein Plan. Wir warten gar nicht so lange Ende nächster Woche, ich habe den
            jetzt schon bestellt, wir kriegen den nächste Woche Freitag, also Donnerstag kann ich den Abholen und Freitag machen wir
            ihn schon an, der bräuchte bei ihren Räumen, ich habe das jetzt mal ausmessen, also ausrechnen lassen von einem Kumpel bei ihren Räumen müssen wir den 3 Tage laufen lassen, das heißt wir hauen den Freitag an nächste Woche Freitag und dann haben sie ja auch Zeit weil das Wochenende ist hoffe ich dann hinzu fahren und immer ab und zu mal auszuleeren weil da sehr viel Wasser rauskommen wird. Und dass wir den bis Montag laufen lassen, Montag weg und dann können wir schon dann mit den Wänden beginnen, das wär doch super. Dann passt der ganze Zeitplan von mir auf, dann sind wir da fertig und ja, so machen wir das.</p>

        <p>25.08.25, 13:15 - R. Neumann - Hatte ich noch nicht mitgeteilt, der Containertausch hat geklappt.</p>

        <p>25.08.25, 13:16 - S. Lingreen - PTT-20250825-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250825-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Danke, Herr Neumann für die Bestätigung, aber das habe ich von der Firma auch mitgeteilt
            bekommen, das weiß ich.</p>

        <p>01.09.25, 10:08 - S. Lingreen - PTT-20250901-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250901-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Die Firma hat mich jetzt gerade angerufen, die machen den Bagger jetzt bereit, fertig und dann geht er heute Nachmittag auf Touren zu euch, sobald die losfahren, rufen Sie mich an, fahre ich auch los und dann sind wir da ne dann erstmal anliefern, alles aufbauen, alles fertig machen und mal sehen was wir denn da heute noch weggestemmt kriegen. Also wie gesagt läuft erstmal  nach Plan, ich wurde gerade angerufen, Bagger wird heute Nachmittag geliefert sobald wir auf dem Weg sind würde ich mich dann noch mal melden.</p>

        <p>01.09.25, 10:41 - R. Neumann - Danke</p>

        <p>01.09.25, 14:56 - S. Lingreen - PTT-20250901-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250901-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Morgen hier noch mal Herr Neumann, ich hab jetzt mit der Firma noch mal gesprochen, also die fahren vor 16:00 Uhr nicht los und nicht raus um das Ding abzugeben. Ich warte jetzt noch mal auf den Rückruf von dem Chef, weil das ist ja der Wahnsinn. Ich sitze jetzt den ganzen Tag auf heiße Kohlen, damit wir auch losfahren. Wir haben hier den ganzen Tag verloren und das geht gar nicht, das möchte ich von der Firma natürlich ersetzt haben, weil mir zugesprochen worden ist. Das Ding wird heute spätestens mittags geliefert, natürlich waren wir dann ja heute nicht, da haben wir nichts geschafft, aber. Der soll heute noch geliefert werden. Ich werd das jetzt so versuchen zu vereinbaren, dass die mir den nach Sanitz liefern und ich mir den selber ans Firmenauto häng, den Anhänger, weil das dürfen wir ja, der ist ja nicht so schwer und ich nehm den morgen früh dann selber mit bevor ich mich woanders drauf verlass ne weil heute jetzt noch mal rüberzufahren ist es 15:00 Uhr 16:00 Uhr haben die Jungs eigentlich immer Feierabend, das wär Schwachsinn also es ist unglaublich aber es ist überall bei den Baufirmen so, es ist überall die sind ausgebucht bis zum geht nicht mehr.</p>

        <p>01.09.25, 14:57 - S. Lingreen - PTT-20250901-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250901-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript:</b>Aber zumindestens ist der Entlüfter schon bei mir angekommen, den habe ich schon bei mir stehen, aber den holen wir trotzdem erst Freitag rein. Wir wollen es nicht übertreiben, aber der Lüfter steht bei mir schon im Lager.</p>

        <p>02.09.25, 10:42 - S. Lingreen - PTT-20250902-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250902-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript:</b>Guten Morgen, Herr Neumann. Ich habe mich gestern gar nicht mehr gemeldet. Also der Bagger ist jetzt eben gerade hier bei mir angekommen in sanitz, wir machen jetzt alles soweit fertig, ich fahre aber trotzdem erst morgen früh raus, weil ich habe nachher noch einen Anwaltstermin und den muss ich
            wahrnehmen und dann, dass sie jetzt Bescheid wissen, Bagger ist da das Gerät zur Entlüftung ist da, das stellen wir morgen auch rein. Und dann geht's morgen los. Dass sie Bescheid wissen, ne, also es hat jetzt geklappt, den habe ich gestern leider nicht mehr gekriegt, weil der Bohrkopf irgendwie da kaputt war. Ich kann es ihnen auch nicht erklären, wenn es da ist, ist es da wie wir es schon gesagt haben, jetzt wurde er abgeliefert, kann dann morgen endlich losgehen, also morgen ist die Terrasse in Schutt und Asche und im Container drinne danke Herr Neumann, falls noch irgendwas ist, melden Sie sich gerne, Sie wissen Bescheid.</p>


        <p>02.09.25, 11:00 - S. Lingreen - PTT-20250902-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250902-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Hätten wir immer noch ne kurze Frage, wenn die Terrasse morgen im Container liegt und an den Seiten das auch alles ab ist, weil das machen wir morgen mit ab, wenn der Bagger schon mal da ist, kann ich den Container dann morgen Abend abholen lassen oder wollen sie von der Wohnung noch irgendwas reinschmeißen oder soll der also soll der noch n paar Tage stehen bleiben falls sie da noch irgendwas wollen.</p>

        <p>02.09.25, 12:56 - R. Neumann - Warum warten sie nicht, bis sie fertig sind und lassen ihn dann abholen?</p>

        <p>03.09.25, 09:12 - S. Lingreen - PTT-20250903-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250903-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann, dass Sie sich noch nicht wundern, dass noch keine Fotos kommen. Wir sind immer noch in Sanitz, wir wurden von der Polizei rausgezogen mit dem Trailer, mit dem  Bagger drauf, das Auto, das wir haben, darf eine gesamtzulässige Tragkraft von 2 Tonnen ziehen, der Anhänger
            mit Bagger wiegt alleine zweieinhalb Tonnen plus Auto, dazu sind wir überschritten, jetzt haben wir eine schöne Strafanzeige und durften den Trailer stehen lassen, jetzt muss ich warten bis 13:00 Uhr, da kommt mein Kumpel, der hat einen großen Bautransporter. Der darf den Bagger ziehen und dann sind wir vor Ort. Dann werden wir heute wohl ein bisschen länger machen und dann mal sehen oder mal was der Bagger ist ja bis Montag da, es kotzt mich an, es kotzt mich an, darüber habe ich gar nicht nachgedacht, mein Ford darf 2 Tonnen ziehen und habe gedacht, das wäre super, aber naja man soll sich vorher Gedanken machen, nur dass sie Bescheid wissen,also es passiert heute was, aber wie und was und wann es nervt mich schon wieder.</p>

        <p>03.09.25, 09:13 - S. Lingreen - PTT-20250903-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250903-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Aber ich leg mich gar nicht drüber auf. Wir sind ja bis Freitag sowieso da. Heute ist erst Mittwoch und dann ist alles weg und den Container, da habe ich angerufen, den können wir stehen lassen bis Baubeendigung, der kostet jetzt keine Zeit mehr, da ist ein Festpreis und das ist auch erledigt.</p>

        <p>03.09.25, 13:50 - S. Lingreen - PTT-20250903-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250903-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, nach lang langem Telefonierer rein bringt die Firma jetzt den Bagger selber rüber zu Ihnen auf die Baustelle. Aus Versicherungsgründen darf ein Freund von mir das nicht fahren, weil ich ja der der Verm, also der Mieter des Dings bin, wenn da irgendwas passiert ist das Ding nicht versichert, also fährt die Firma das Ding eingängig rüber, damit sie Bescheid wissen, ne die stellen den vor dem Tor ab und machen eine ein Schloss an den
            Bagger ran. Und an den Hänger, dass der nicht geklaut werden kann. Und wir sind dann pünktlich morgen, da ist das alles ein Scheiß gut, Herr Neumann, wenn irgendwas ist, müssen sie mir eine whatsapp schreiben, weil wir sind heute Abend auf der Hochzeit eingeladen, ich bin schwer zu erreichen, ne wie gesagt Anhänger und Bagger werden heute einfach hingestellt und dann geht's morgen los nervt mich alles ah egal, wir haben ja keinen Zeitdruck, wir haben ja nun mal keinen Zeitdruck, draußen können wir eh nur das die Terrasse wegmachen und das bisschen. Sand da wegmachen von der von der Dings und dann geht es ja ab nächste Woche erst mit der Sockelverdichtung und allem anderen los, wo wir dann offiziell von außen auf jeden Fall was machen dürfen, ne?</p>

        <p>03.09.25, 14:07 - R. Neumann - Die Nachbarn passen auf, da klaut keiner was...sie können also mit ruhigem
            Gewissen
            zur
            Party gehen...</p>

        <p>03.09.25, 14:18 - S. Lingreen - PTT-20250903-WA0004.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250903-WA0004.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Aber nicht weg von ihr.</p>

        <p>03.09.25, 14:18 - S. Lingreen - PTT-20250903-WA0005.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250903-WA0005.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Manchmal gar keine Sorgen. Der Bagger ist GBS überwacht und der Anhänger auch, also selbst
            wenn da die Polen kommen
            sollten oder oder oder passiert uns nichts, da sind wir versichert, also den klaut so schnell keiner weg.
        </p>

        <p>04.09.25, 10:59 - S. Lingreen - PTT-20250904-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250904-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Haben Sie irgendwas schon mitgekriegt? Da war ihre Frau mal an der Wohnung, ob der Bagger nun angekommen ist? Heute Morgen wurde der vom Grundstück abgeholt und sollte zu euch rübergefahren werden. Ich hab jetzt in der Firma noch keinen erreicht, hab aber bisschen länger geschlafen, wir waren heute morgen um 5 erst zu Hause, mich würd immer interessieren ob der schon da steht oder nicht, aber der Chef wird mich ja dann noch mal anrufen damit das dann da endlich vorwärts geht, die Jungs sind dann aus dem Urlaub zurück also wie sie hören heute bin ich auch nicht gut so. Nicht so gut also. Die Hochzeit war sehr schön, aber die ging halt sehr lange und dann bin ich heut auch tot so ich schick trotzdem morgen früh ist der Baggerfahrer da und 4 Jungs von mir Matze und Axel, die kennen sie ja und Martin und Andre sind morgen da ich bin erst ab mittags da, aber bis dahin haben die die Terrasse runtergedrescht ich hab jetzt noch mal 2 große Stemmhammer noch dazu geholt, dass wenn der Bagger die großen Platten durchbricht, dass wir die noch n bisschen kleiner machen können, damit die nicht so n großes Stück in den Container kommen.</p>

        <p>04.09.25, 14:23 - R. Neumann - Meine Tochter sagt, dort ist kein Bagger. Habt ihr auch die richtige
            Zieladresse
            angegeben?</p>

        <p>04.09.25, 15:42 - S. Lingreen - PTT-20250904-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250904-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, ich meld mich heute Abend, ich hab noch keine Rückmeldung, ich weiß nicht, was da genau jetzt los ist. Sobald ich den erreiche, melde ich mich bei Ihnen. Die Adresse war absolut richtig.</p>

        <p>04.09.25, 16:28 - S. Lingreen - PTT-20250904-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250904-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So Herr Neumann, das Problem liegt nicht bei uns. Die Adresse alles ist richtig, das Problem liegt am Büro, an der
            an der Frau, die das aufgenommen hat, die haben verstanden, also sie hat verstanden vom Chef, ich habe ja mit dem Chef telefoniert und habe denen gesagt, was mein Problem ist, dass wir von der Polizei anhalten wollen, sind bla bla bla bla und er gesagt hat okay er schickt einen Mitarbeiter, er fährt ihn darüber die Tippse, also die Sekretärin, die das alles macht hat verstanden, der Bagger soll nach Hause geholt werden, die haben heute morgen einen
            losgeschickt und haben den Bagger. Nach Hause geholt, also in die Firma zurück, so Folgedessen, steht der Barrett wieder in der Firma und wurde für morgen früh vermietet. Ich kotze hier gleich richtig ab, jetzt habe ich mit dem Chef wieder telefoniert, der auch endlich mal erreichbar war so der hat mir jetzt zugesichert, dass der für Montag, also am Samstag wird der noch geliefert zu euch nach Hause, dass ich den am Montag nutzen kann, Gott sei Dank kostenfrei, also die übernehmen den Fehler, aber das wirft mich ja natürlich trotzdem wieder zurück ne und?</p>

        <p>08.09.25, 09:28 - S. Lingreen - PTT-20250908-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250908-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich wollte mal hören, ob sie heute vor Ort sind am Haus, weil der Bagger, der wurde gerade angerufen, der wird zwischen 12 und 15:00 Uhr heute geliefert und dann kommt noch mal der EGN Baumarkt und liefert eine Palette armierungsmörtel Gewebe und alles, was ich für den Keller brauche, ja, wenn nicht, nicht schlimm, sagen Sie mir mal Bescheid, weil sonst fahr ich heute Mittag rüber und dann geht's jetzt komplett los. Ab morgen aber wär wichtig zu wissen, ob jemand da ist und ob Platz ist unterm Carport für die Palette, weil das darf nicht nass werden, aber das können wir ja zur Not auch unterm Keller stellen, da steht ja jetzt keiner mehr im Weg.</p>

        <p>08.09.25, 17:05 - R. Neumann - Wie geht es voran?</p>

        <p>08.09.25, 17:48 - S. Lingreen - PTT-20250908-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250908-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, Herr Neumann, nicht viel. Ich habe die Materialien habe ich erstmal abgesagt, weil wir sie die Woche ja sowieso nicht brauchen, die werden jetzt nächste Woche Mittwoch geliefert, weil die Jungs wollen erstmal stemmarbeit noch ein bisschen im Keller machen, das können wir ja trotzdem jetzt schon machen und der Bagger wurde geliefert, der steht 2 Straßen von euch entfernt bei einem Kumpel auf dem Hof, weil der kein GPS und nichts hat und den hole ich mir morgen früh da weg, der wohnt gleich von euch 4 Minuten entfernt da von eurem Haus. Und dann reißen wir morgen die Terrasse weg, so wie wir es besprochen haben. Am Telefon erstmal die ganze Terrasse weg, den Sand weg, den ganzen Schutt weg, dann die Stemmarbeit noch im Haus, was da noch ein bisschen weg muss von dem Ende, das ist ja auch nicht viel, Container voll machen, Container weg und dann müssen wir dann mal sehen, dass wir in 23 Wochen dann ja, wie
        Sie dann sagen, fangen Sie an den drinnen und fangen Sie nicht an, den drinnen im Keller ne, aber ich rede da vorsichtig, wie gesagt, wir wollen ja auch nichts.</p>

        <p>08.09.25, 17:53 - R. Neumann - Ich komme dann morgen vorbei. Rufen Sie mich einfach an, am Nachmittag bin ich
            flexibel.</p>

        <p>08.09.25, 17:53 - S. Lingreen - PTT-20250908-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250908-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, super, dann sehen wir uns morgen, Herr Neumann. Ne, das mach ich, ich meld mich sofort wenn wir da sind und ja schmeiß dann noch n paar Fotos durch durch den Chat, aber wenn sie ja dann sowieso kommen gibt dann gute Dinge, dass die morgen weg ist. Ist ja nicht viel, der Bagger braucht da vielleicht ne Viertelstunde um die Betonplatte oben kaputt zu ballern und dann wird das ja nur in Container geschmissen ne aber wir wollen die also auch schön klein machen mit dem Stemmhammer noch damit wir Platz haben damit die nicht so viel Platz wegnimmt ne OK super so machen wir das schönen Abend noch.</p>

        <p>09.09.25, 09:52 - S. Lingreen - PTT-20250909-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250909-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich muss noch mal wieder zurück. Diese Affen haben für den Bagger diesen notschlüssel, ach, wie soll ich denn das erklären, der hat so n ja springt nicht an, das ist ein Schlüssel wo man den umdreht und dann hat man noch n Schlüssel wo er ne so ne Diebstahlsicherung nennt sie das jetzt kann ich noch mal nach Rostock in die Firma fahren den Diebstahlschlüssel holen, ich hab die Schnauze gestrichen voll also falls sie gegen 12 1 da sind, so schnell werde ich nicht sein aber nachher so um 14 15:00 Uhr bin ich dann auch wieder da. Ne, dass Sie Bescheid wissen, ich nicht. Also nicht so viel Ärger hatte ich noch nie.</p> 

        <p>09.09.25, 15:41 - R. Neumann - Wenn Sie die Arbeit nicht erledigen möchten oder können, dann besteht auch die Möglichkeit von dem Auftrag zurückzutreten. Uns läuft die Zeit davon.</p>

        <p>09.09.25, 15:58 - S. Lingreen - PTT-20250909-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250909-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, wir machen definitiv alles fertig. Ich weiß nicht, warum sie immer sagen sie ihnen läuft die Zeit davon, wir können doch sowieso nur draußen die Terrasse weggreifen, den ganzen Schutt, in den in den in den Container reinschmeißen und denn von von innen im Keller können wir großartig noch nicht viel machen, weil wir nicht viel machen dürfen, weil das immer noch in der Trocknungsphase ist. Und von außen können wir auch nur die
        Sockelleisten, da alles wegmachen und den Schutt runter und dann dürfen wir auch noch keine. Sockelverdichtung machen, weil wie gesagt, die Wände erst austrocknen. Sie sagen selber, es ist noch total feucht und sie sagten gestern selber, so wie wir besprochen haben, in 2 Wochen kommt der Architekt zu vermessen, allen Drum und dran, also was für eine Zeit läuft ihnen denn davon? Wir haben noch 2 Tage Arbeit im Außenbereich und dann haben wir erstmal, dann stehen wir erstmal da und müssen die Trocknungsphase mal mindestens noch 2 bis 3 Wochen abwarten also ich weiß nicht warum sie denn immer sagen
        die Zeit läuft Ihnen davon so den Schlüssel habe ich bekommen wir sind morgen neben die Tag reißen die Trasse weg.
        </p>

        <p>09.09.25, 15:59 - S. Lingreen - PTT-20250909-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250909-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Und Herr Neumann, glauben Sie mal nicht, dass ich nicht glaub, dass ihn das auch nervt und dass sie das auch total auf den Kranz geht, dass es nicht vorwärts, nicht vorwärts geht. Aber wie gesagt, es ist die Terrasse und außen noch und dann ist uns erstmal die Hände gebunden, da können wir nicht viel machen und wie sie sagen, in 2 Wochen wird da auch Maß gemacht dieses Jahr denk ich doch nicht, dass da noch ne Terrasse hingebaut wird, das kann ich mir gar nicht vorstellen, aber gut ne, ich kann sie schon ganz ganz gut verstehen, aber ändern kann ich daran auch nichts Herr Neumann, ich meld mich dann morgen früh dann wir kriegen das hin. Sie werden es selber sehen. Bis Samstag ist ihre komplette Terrasse weg, komplett aufgeräumt.</p>

        <p>10.09.25, 10:36 - R. Neumann - Sind Sie heute vor Ort?</p>

        <p>10.09.25, 11:26 - S. Lingreen - PTT-20250910-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250910-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Also Herr Neumann, heut Nachmittag bin ich nicht vor Ort. Ich bin jetzt gerade da, das dauert jetzt hier 3 Stunden, bis ich komplett durch bin mit allem drum und dran, dann habe ich arztgespräch, also bin ich da vor 15:00 Uhr bin ich hier nicht raus 15 16:00 Uhr und dann lohnt sich ja die Überfahrt überhaupt nicht mehr, aber morgen bin ich damit meine 2 Jungs da und dann reißen wir die Terrasse endlich ein ne aber wie gesagt, das hatte ich ja gestern schon gesagt, ich weiß nicht genau wie war es wo heute, aber den Schlüssel habe ich im Auto liegen vom Bagger, dass der auch nicht vergessen wird und dann geht es morgen los. Ne Frage ist wieviel Schubkarren haben Sie da? Haben sie 2 Schubkarren da oder ist noch eine da? Müssen wir noch eine Mitbringen für den Sandtransport oder sind 2 Stück da.</p>

        <p>10.09.25, 15:00 - R. Neumann - Ich habe eine Schubkarre dort. Diese können Sie dann auch nehmen.</p>

        <p>10.09.25, 15:04 - S. Lingreen - PTT-20250910-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250910-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, wir bringen dann auf jeden Fall noch mal 2 Sonde blechschuhkarre mit, weil sie haben da diese. Ich glaub diese DDR Schubkarre, diese diese Eisenschubkarre, die ist sehr sehr schwer. Na ich bring noch 2 vernünftige mit.
        </p>

        <p>11.09.25, 08:38 - S. Lingreen - PTT-20250911-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250911-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Leider muss ich Ihnen heute mitteilen, dass ich auch heute nicht da sein werde. Ich hatte gestern Abend das Arztgespräch noch gehabt und heute morgen muss ich jetzt noch mal hin, weil leider ist das Loch im Herz größer als es sein darf und dann haben sie noch was anderes festgestellt, das wird heute noch mal abgeklärt, ich bin ein bisschen geschockt, habe jetzt mit den Jungs gesprochen, die sind auch da, wir haben jetzt
        besprochen, dass wir dann als Ausfall, dass wir heute da nicht sind, auch den Samstag mit Ranhängen, also diesmal machen wir auch den Samstag mit. Und ja, ich muss das jetzt erstmal abklären, damit das denn erstmal alles gesundheitlich vorwärts geht. Und morgen ist Beerdigung, da sind wir auf Beerdigung, dann sind wir erst nach mir, also da sind wir definitiv am Nachmittag bei euch, aber wir werden ja an einem Nachmittag nicht alles schaffen, deswegen hängen wir den Samstag an, nur dass sie heute morgen schon Bescheid wissen. Ach ist alles nervend, also Herr Neumann, verzeihen Sie mir bitte, aber
            wie gesagt morgen Nachmittag definitiv und den ganzen Samstag dann und dann ist Samstag auch terrassenabschluss.
        </p>

        <p style="color: red">11.09.25, 09:17 - R. Neumann - Warum können ihre Leute auch ohne sie arbeiten? Wo ist das Material, welches schon
            vor Wochen geliefert werden sollte? Wir haben ein enorme Summe in Echtzeit überweisen müssen. Deshalb erwarten wir auch eine Erledigung der Arbeit in Echtzeit. Ich glaube nicht, dass jemals jemand hier die Arbeit fortsetzen wird.</p>

        <p>11.09.25, 09:22 - S. Lingreen - Diese Nachricht wurde gelöscht.</p>

        <p>11.09.25, 09:23 - S. Lingreen - Diese Nachricht wurde gelöscht.</p>

        <p>11.09.25, 09:39 - S. Lingreen - PTT-20250911-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250911-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, eine bitte, wenn es irgendwas zu besprechen gibt oder sonst was, dann rufen wir uns an oder ich ruf sie dann an, weil mit dem whatsapp, man versteht sich auch immer falsch, dann pusht man sich hoch, dann regt man sich auf, das hat alles keinen Sinn, ne wenn irgendwas sein sollte, rufen wir uns an, wenn wir uns nicht erreichen, rufen wir uns zurück, Kleinigkeiten kann man per Sprachnachricht regeln, aber ansonsten, sonst versteht man sich nur falsch und es gibt immer nur Ärger man ach das ist doch alles nix Herr Neumann, ich wünsche Ihnen einen schönen Tag.</p>

        <p>14.09.25, 18:26 - R. Neumann - Hallo Herr Lindgreen, wie sieht es aus bei Ihnen? Wir würden gern mit Ihnen sprechen. Ich wünsche Ihnen noch einen schönen Restsonntag.</p>

        <p>14.09.25, 18:36 - S. Lingreen - Sie können mich gerne telefonisch kontaktieren.</p>

        <p>15.09.25, 09:27 - S. Lingreen - VID-20250915-WA0001.mp4 (Datei angehängt)<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250915-WA0001.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250915-WA0001.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>15.09.25, 09:27 - S. Lingreen - PTT-20250915-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250915-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Also wir sind beide wie versprochen, das Wetter ist natürlich die Hölle, Minibagger haben wir ja nun leider nicht mehr da, weil der ja heute zurückgegangen ist. Aber hätte, wäre auch mit dem Minibagger nicht gegangen, da ist so viel Metall und Eisen drinne, das hätte uns gar nichts gebracht mit dem mit dem Minibagger, wir müssen wirklich alles Millimeter genau mit dem stemmhammer wegknallen also wir tun heute unser bestes, sie wissen ja selbst, dass wir heute nicht so lange da sind, aber morgen geht es weiter und wie sie auch sehen, auch der Regen hält uns nicht auf.</p>

        <p>15.09.25, 09:29 - S. Lingreen - VID-20250915-WA0002.mp4 (Datei angehängt)<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250915-WA0002.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250915-WA0002.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>15.09.25, 13:24 - S. Lingreen - PTT-20250915-WA0004.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250915-WA0004.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Bitte Hoffnung, dass sie denn halbwegs zufrieden sind für heute.</p>

        <p>15.09.25, 13:24 - S. Lingreen - PTT-20250915-WA0005.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250915-WA0005.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, Wir verabschieden uns für heute. Sie wissen Bescheid, lassen sich überraschen. Ich schick jetzt keine Fotos mehr, sie werden ja sowieso später noch mal hinfahren und noch mal gucken, vielleicht melden Sie sich ja dann noch mal mit einer schönen whatsapp oder irgendwas Wahnsinn, also die Terrasse, das ist ja, wir haben jetzt die erste Schicht oben, die Hälfte wieder runter und nach dieser Schicht, da kommt noch mal Draht und nach dem Draht kommt noch mal bei noch mal. Noch mal Beton also, das ist ja völliger Wahnsinn, ne also Wahnsinn. Na gut, wir sind zufrieden für heute, vielleicht schicken Sie noch mal eine schöne whatsapp und dann sehen wir uns in Alter Frische am morgigen Tag aber lassen Sie mich überraschen, ich schicke jetzt keine Bilder mehr.</p>

        <p>15.09.25, 13:24 - S. Lingreen - PTT-20250915-WA0006.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250915-WA0006.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Auch ein kleines Lächeln für sie. Wir haben heute in Echtzeit gearbeitet.</p>

        <p>15.09.25, 13:24 - S. Lingreen - 🤗</p>

        <p>15.09.25, 19:20 - R. Neumann - Danke, für euren Einsatz ...</p>

        <p>16.09.25, 08:28 - S. Lingreen - PTT-20250916-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250916-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich weiß nicht, ob das bei ihnen da zu Hause auch so doll ist. Also hier ist das so
            stürmisch und plattert schon wieder, dass wir erstmal jetzt jemand Vormittag nicht losfahren, wenn sich das heut Nachmittag beruhigt, machen wir heute Nachmittag weiter, aber hier ist das sowas von sowas von windig, da kann ich die Leute bei dem Wetter kann ich die nicht auf die Terrasse stellen ne aber sobald es besser wird sind wir da, also nur dass sie kurz Bescheid wissen. Und ja, aber dafür ist ja morgen wieder Stillstand. Ne, Morgen ist ja schon
            mal wieder zehnmal besser.</p>

        <p>16.09.25, 08:31 - S. Lingreen - VID-20250916-WA0002.mp4 (Datei angehängt)<br>
            <video controls width="640" preload="metadata">
                <source src="/images/atg/VID-20250916-WA0002.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht. <a href="/images/atg/VID-20250916-WA0002.mp4" download>Video
                    herunterladen</a>
            </video>
        </p>

        <p>16.09.25, 08:31 - S. Lingreen - PTT-20250916-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250916-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Nicht, dass Sie nachher sagen, bei Ihnen ist Sommer und bei uns geht die Welt hier unter ne wissen Sie Bescheid?</p>

        <p>16.09.25, 08:37 - R. Neumann - Es ist hier auch windig.</p>

        <p>17.09.25, 08:36 - R. Neumann - Moin, ich war heute schon vor Ort. Es ist gutes Wetter, beste Bedingungen für euch.
            Am
            Samstag 11:00 Uhr habe ich die Baubesprechung und diese sollte stattfinden, wenn die Fläche freigeräumt ist.
        </p>

        <p>17.09.25, 09:50 - S. Lingreen - PTT-20250917-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250917-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Heute bin ich leider nicht da, weil ich in der Chirurgie wieder bin, also ich hier im Krankenhaus bin scheiß Blödsinn, aber dafür sind wir den ganzen morgigen Tag da, ob es regnet oder nicht, das interessiert uns nicht, wir haben Regenjacken und regenhosen, dann wird weitergemacht und wir sind auch Freitag den ganzen Tag da. Also ich geh zu 1000% davon aus, dass es Freitag auch weg ist. Alles. Ich würde aber auch gern den Samstag, weil der Samstag soll der Tag sein, wo es sonnig ist und schön ist. Wenn Sie der Baubesprechung irgendwas haben, stört Sie das, wenn wir da sind, weil ich würde dann gern den Sockel schon fertig machen, aber ich denke mal, da haben Sie nichts dagegen, wenn wir den Samstag trotzdem da sind und danach, wenn da die Sonne scheint, dass wir da bisschen arbeiten.</p>

        <p>17.09.25, 09:51 - S. Lingreen - PTT-20250917-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250917-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Aber bis Freitag ist ihre Terrasse komplett weg. Da geb ich Ihnen mein Wort drauf.</p>

        <p>17.09.25, 10:48 - R. Neumann - Wenn Sie am Samstag dort sind, dann kann ich Ihnen den Architekten vorstellen und es macht ja auch einen guten Eindruck, wenn fleißig e Handwerker vor Ort sind.:-)</p>

        <p>17.09.25, 11:24 - S. Lingreen - Ja das meine ich auch ...🤗so machen wir das 👍</p>

        <p>18.09.25, 13:23 - S. Lingreen - PTT-20250918-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250918-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Tag, Herr Neumann. Leider sind wir heute nicht auf Baustelle. Ich bin heute morgen mit dem Rettungswagen ins Klinikum nach Rostock gekommen, da ich wieder herzblutdruckrasen hatte, Verdacht auf Herzinfarkt, Gott sei Dank nicht, ich weiß nicht, ob ich heute noch nach Hause komme, noch liege ich in der Aufnahme, ich habe mit den Jungs jetzt kurz gesprochen, weil die haben heute morgen davon nichts mitgekriegt, ich konnte mich gar nicht melden, so schnell ging das, die Jungs sind trotzdem morgen früh und Samstag vor Ort und reißen die komplette Terrasse weg, wie wir es versprochen haben. Ich werde nicht dabei sein, also wundern sie sich nicht, dass nur die Jungs da sind. Sie kommen trotzdem zu dritt und sind morgen ab 09:00 Uhr da, wenn ich nachher mehr weiß, melde ich mich noch mal. Und ja, also morgen ist die Terrasse definitiv weg, die kommen mit 3 Mann, das reicht völlig und noch 2 großen Stemmhammer und dann ja sorry, dass ich mich so spät erst melde, aber die haben mir jetzt erst diesen WLAN Code gegeben.</p>

        <p>18.09.25, 13:24 - S. Lingreen - IMG-20250918-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250918-WA0001.jpg" alt="" />

        <p>18.09.25, 13:24 - S. Lingreen - PTT-20250918-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250918-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Wahnsinn was so abgeht. Ne, mein ganzes Gesicht ist völlig aufgeschwollen Wahnsinn, aber jetzt ist schon viel besser, also die haben den Blutdruck jetzt runter genommen mit Medikamenten und es ist schon viel besser, also sie wissen Bescheid, es läuft trotzdem weiter alles nach Plan Samstag zu der Zeit wo ihr Architekt kommt ist die Terrasse Geschichte ne.</p>

        <p>18.09.25, 14:09 - R. Neumann - Da kann ich Ihnen nur gute Besserung wünschen.</p>

        <p>18.09.25, 14:10 - S. Lingreen - 👍...wichtig ist das morgen die Terrasse weg ist....das ist mir das wichtigste</p>

        <p>18.09.25, 14:10 - S. Lingreen - geben sie mir bitte bescheid morgen abend wie es aussieht</p>

        <p>18.09.25, 14:12 - R. Neumann - Das mache ich.</p>

        <p>19.09.25, 12:13 - S. Lingreen - PTT-20250919-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250919-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Hallo Herr Neumann, ich wollte Ihnen nur mitteilen, dass ich jetzt wieder entlassen worden bin. Blutdruck ist wieder eingestellt, ich hab jetzt neue Tabletten bekommen, heute ruh ich mich auf jeden Fall noch mal n bisschen aus und dann bin ich morgen auch definitiv wieder dabei zur Überwachung. Die Jungs sind heute nicht rausgefahren, weil die leider nicht an den Autoschlüssel kamen, bei mir zu Hause war meine Frau auch arbeiten, war aber morgen geht es dann weiter, dann sieht ihr Architekt die fleißigen Handwerker ne also ich bin morgen dabei, ich werd zwar natürlich nicht groß mit Anfassen und werde da. Aber überwachen und gucken, dass alles vernünftig läuft. Ich wollte Ihnen nur Bescheid sagen, weil das wir ja bei uns abmachen, wenn irgendwas ist, Bescheid sagen und ja, also wir sind morgen ab 09:00 Uhr vor Ort, liebe Grüße und bis morgen.</p>

        <p>19.09.25, 12:13 - S. Lingreen - PTT-20250919-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250919-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, ganz schön wäre es auch noch, wenn sie vielleicht noch irgendwo ne Schubkarre besorgt kriegen, weil wir kommen morgen nur mit einem Kombi, also mit einem normalen Auto mit 4 Leuten und morgen soll das Ding definitiv weg, dass wir den ganzen Sand auch gleich dass 2 Jungs stemmen und die 2 Jungs den Sand da andauernd wegkahnen. Wir kriegen in den Kombi keine Schubkarre rein, also vielleicht kriegen sie das irgendwie organisiert von einem Nachbarn oder so für einen Tag ne Schubkarre zu leihen.</p>

        <p>20.09.25, 10:02 - S. Lingreen - Die Jungs würden jetz los fahren ....wenn sie dürfen....sie haben sich ja gestern nicht mehr gemeldet...</p>

        <p>20.09.25, 10:02 - S. Lingreen - Ich gehe davon aus eine 2 Schubkarre ist nicht da ?</p>

        <p>20.09.25, 10:03 - S. Lingreen - Guten Morgen...</p>

        <p>20.09.25, 10:20 - R. Neumann - Ich könnte eine besorgen.</p>

        <p>20.09.25, 11:03 - S. Lingreen - PTT-20250920-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250920-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Also wie gesagt, Herr Neumann, der Architekt kann mich jederzeit anrufen, bin jederzeit für ihn erreichbar und von Montag bis Freitag sind wir definitiv immer von 8 bis 15:00 Uhr da. Wie gesagt, das sind ja jetzt alle Arbeiter wieder da, wir haben keine anderen Projekte mehr, sie sind unser einziges Projekt, jetzt komplett nur mit heute wird das mit mir noch nicht zu hören, dasselbe die Luft ist völlig knapp, ich muss mich erstmal an die Tablettenumstellung jetzt gewöhnen aber. Wenn erfragen hat oder irgendwas sein sollte, kann er mich jederzeit kontaktieren und uns auch besuchen auf der Baustelle. Wie gesagt von Montag bis Freitag von 8 bis 15:00 Uhr sind wir jetzt immer da. Wir fangen auch mit der Kellerräume an, die Keller sind trocken, wir fangen an die Ecken schon zu setzen, die ganzen alles was da dazu gehört und ich habe mit den Jungs gestern mal gesprochen, die Essen jetzt noch in Ruhm Mittag.</p>

        <p>22.09.25, 08:42 - S. Lingreen - PTT-20250922-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250922-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So Guten Morgen, Herr Neumann. Ich bin gerade beim Arzt noch mal schnell raus, Pumpe alles funktioniert wieder, Werte sind alle super. Ich besorge jetzt wieder das Trocknungsgerät, weil das hatten wir ja erst mal woanders reingestellt, hol die Materialien für den Sockel, dass wir den Sockel fertig kriegen, die Abdichtung da drauf kriegen die Woche. Und alles andere, was wir jetzt noch brauchen für heute, brauche ich sie nicht da. Es wäre aber schön, wenn sie mich morgen Nachmittag dann besuchen kommen, weil wir, ich kann jetzt nicht genau sagen, wann wir heute da sind, weil jetzt wie gesagt alles an Materialien mitgebracht wird, damit wir da völlig reinhauen können und links und rechts und vorne schon mal die Sockelabdichtung gemacht werden kann morgen und hinten die ganze Terrasse weg und dann müssen wir dann auch noch mal sprechen und also es wäre schön, wenn Sie mich morgen besuchen kommen, heute brauche ich sie nichtmorgen Nachmittag.</p>

        <p>22.09.25, 08:43 - S. Lingreen - PTT-20250922-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250922-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ich hätte sie auch angerufen, aber ich weiß nicht, ob sie wieder im Meeting sind oder im Büro. Sie können mich auch gerne anrufen, ich bin erreichbar, ne, falls Sie das kurz mir erklären wollen mit der Hinterwand.</p>

        <p>22.09.25, 08:49 - R. Neumann - Wir haben mit dem Architekten über die Terassenseite gesprochen. Ich nehme an, er wird sie heute anrufen. Ich werde ihn noch mal daran erinnern.

        <p>22.09.25, 08:51 - S. Lingreen - PTT-20250922-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250922-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ah okay super Herr Neumann, dann weiß ich Bescheid, dann erwarte ich den Anruf von dem Herrn. Also wie gesagt die nächsten 2 Tage gar nicht schlimm, aber dann muss ich es wissen, weil wir machen jetzt erstmal Vorderseite links und rechts vom Haus und reißen hinten die Terrasse weg und dann muss ich ja in 23 Tagen, wenn dann der Sand und alles weg ist muss ich ja dann auch die Abdichtung eventuell wahrscheinlich da machen, aber deswegen brauche ich die Absprache mit dem Architekten, weil ich ja wissen muss was da hinten passiert. Und dann zu wissen, wie wir abdichten, ne OK, dann erwarte ich deinen Anruf. Herr Neumann, Sie wissen Bescheid, wie gesagt morgen einmal bitte vorbeikommen und sich sehen lassen, wir sind von 8, der stimmt nicht um 8 bin ich das Kind weg von 9 bis 16:00 Uhr sind wir da das dann die ganze Woche durch super Herr Neumann dann freu ich mich dann klappt das jetzt alles.</p>

        <p>22.09.25, 11:56 - S. Lingreen - PTT-20250922-WA0006.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250922-WA0006.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, Ihr Architekt hat mich auch angerufen, super, wir haben uns sehr gut abgesprochen und er weiß jetzt genau Bescheid, wie wir was wie wir es vorhaben, dass Sie Bescheid wissen ne also sehr nett war n gutes Gespräch ja.</p>

        <p>22.09.25, 12:04 - R. Neumann - 👍</p>

        <p>23.09.25, 14:05 - S. Lingreen - </p>

        <p>23.09.25, 14:05 - S. Lingreen - IMG-20250923-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250923-WA0000.jpg" alt="" />
        <p>Wir wünschen einen schönen Feierabend 👍liebe Grüße</p>

        <p>23.09.25, 14:05 - S. Lingreen - IMG-20250923-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250923-WA0001.jpg" alt="" />
        <p>23.09.25, 14:05 - S. Lingreen - IMG-20250923-WA0002.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250923-WA0002.jpg" alt="" />
        <p>23.09.25, 14:05 - S. Lingreen - IMG-20250923-WA0003.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250923-WA0003.jpg" alt="" />
        <p>23.09.25, 14:05 - S. Lingreen - IMG-20250923-WA0004.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250923-WA0004.jpg" alt="" />
        <p>23.09.25, 14:05 - S. Lingreen - IMG-20250923-WA0005.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250923-WA0005.jpg" alt="" />
        <p>24.09.25, 13:09 - S. Lingreen - Das war eine super Idee 👍danke schön</p>

        <p>24.09.25, 15:38 - R. Neumann - Halten wir mal fest, diese Woche Montag und heute war niemand im Einsatz, obwohl es angekündigt wurde. Sie wollten von Montag bis Freitag von 08:00 bis 15:00 Uhr definitiv dort sein. Ich bin morgen gegen 12:30 Uhr vor Ort. Gibt es bereits einen Elektriker, den man sprechen könnte? Wann kommt das Material, welches am Montag kommen sollte? vG</p>

        <p>25.09.25, 08:03 - S. Lingreen - PTT-20250925-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250925-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Kurze Antwort auf die Nachricht, Herr Neumann, ich habe Ihnen das letzte vorletzte Woche und letzten Monat auch schon mal erklärt, was sich planen und was passiert, das sind immer 2 verschiedene paar Schuhe. Ich versuche mein Bestes zu machen und zu tun wie sie gesehen haben, die halbe Terrasse ist weg, das haben wir an einem halben Tag geschafft, wenn was dazwischen kommt, ich bin auch nicht gesund oder was ist dann ist das so, so ist das leben ich kann ich versuche es immer zu planen, ich versuche es immer für alle irgendwie recht zu machen. Sie wissen, dass ich gesundheitlich bin, die auch nicht auf der Höhe. Und dann passiert sowas nun mal. Die Materialien stehen bei mir im Lager, die bringe ich mit, so wie ich sie auch brauche. Ich muss da nicht alles hin und her und hin und her schleppen, wenn ich es noch gar nicht brauch, so die Terrasse die Weg und wir sie haben gesagt ich soll mich mit ihrem Na.</p>

        <p>25.09.25, 08:10 - R. Neumann - Ok, dann also morgen gegen 12:30 Uhr.</p>

        <p>25.09.25, 08:11 - S. Lingreen - Alles klar ...👍</p>

        <p>26.09.25, 07:54 - S. Lingreen - PTT-20250926-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250926-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich muss Ihnen leider mitteilen, dass heute auch keiner kommen wird. Ich hätte ja gesagt, meine Tochter ist gestern zum Arzt gefahren und da ich Enten und Gänse und alles züchte, leider haben wir einen milbenbefall, wir müssen uns jetzt hier 3 Tage behandeln, alles waschen unsere Haut alles mit Creme einseifen wir extra so eine Milbencreme also ich darf mich mit anderen Leuten gar nicht zusammenstellen, also unser Termin
            für uns beide, der muss leider auf Montag verlegt werden, ich werde aber natürlich jetzt mit den Jungs telefonieren. Und sie trotzdem rausschicken wollen, damit sie den Rest von der Terrasse wenigstens wegnehmen können. Damit wir am Montag dann endlich mit dem Sockel beginnen können. Aber das ist jetzt erstmal die Theorie, ich ruf sie heute Mittag Nachmittag noch mal an und dann sag ich Ihnen genau Bescheid, wie es jetzt läuft. Ne, also nur dass sie Bescheid wissen, ich kratz mich jetzt erstmal 2 Tage tot und dann ist alles wieder in Ordnung also 48 Stunden müssen wir das auftragen, es kotzt mich einfach an na gut, aber unseren Zeitplan wie mit dem Architekten besprochen.</p>

        <p>26.09.25, 07:56 - S. Lingreen - PTT-20250926-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250926-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ach so, zweites Ding. Ich hatte ja mit ihrem Architekten telefoniert, der sagte mir er wollte mir ne E Mail schicken und mit, damit ich ihm detailliert ne Liste schicken kann welche arbeiten draußen gemacht werden, was wir was wir komplett machen, was wir abgesprochen haben damit er weiter planen kann wegen Fassade und wie das da hinten weitergeht. Leider habe ich bis heute, ich warte jetzt seit einer Woche drauf noch nicht eine E Mail von ihm erwartet erhalten auch keinen Anruf mehr wie er es machen wollte, ich habe ihm jetzt noch mal ne. E Mail geschrieben, dass er sich dann bitte noch
        mal telefonisch mit mir in Verbindung setzt. Aber ist ja auch nicht so schön, ne, also für einen Architekten, der das eigentlich sofort brauchte nach dem Telefonat und sich bis jetzt noch nicht gemeldet hat. Na gut, warten wir es mal ab, also nicht dass sie jetzt da anrufen und sagen hä, Sie müssen sich beim Herrn Lindgren melden, ich habe mich schon schriftlich zu ihm gewandt und hoffe, dass ich von ihm heute auch noch mal eine Antwort bekomme.</p>

        <p>26.09.25, 08:50 - S. Lingreen - stefanlindgreen1@web.de</p>

        <p>26.09.25, 13:15 - R. Neumann - Der Herr Lindgreen hat bereits Emails geschickt. Wenn Sie diese nicht erhalten
            haben,
            dann
            bitte ich um Rückmeldung. Ich möchte auch noch mal an den Kontakt zum Elektriker erinnern. Bitte kurzfristig
            senden...</p>

        <p>26.09.25, 13:16 - R. Neumann - Ich meinte der Hr. Ulrich hat natürlich die Email geschickt.</p>

        26.09.2025, 10:56 - Ulrich - <a href="/images/atg/ulrich_01.msg" download>📩 E-Mail herunterladen</a><br>
        26.09.2025, 12:32 - Ulrich - <a href="/images/atg/ulrich_03.msg" download>📩 E-Mail herunterladen</a><br>

        <p>26.09.25, 13:17 - S. Lingreen - 01724117001</p>

        <p>26.09.25, 13:18 - S. Lingreen - PTT-20250926-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250926-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Hallo Herr Neumann, das ist der Kontakt zu dem Elektriker. Ich hab mit ihm heute morgen noch mal kurz telefoniert, sie sollen sich bitte mit ihm am Montag Vormittag in Verbindung setzen und dann macht er mit ihnen einen Termin aus. Also ich hatte heute noch mal mit ihm gesprochen und ja Montag vormittag sollen sie sich einfach melden und dann bespricht er mit ihnen den Termin.</p>

        <p>26.09.25, 13:18 - S. Lingreen - PTT-20250926-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250926-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Die E Mail habe ich bekommen von dem Architekten zuerst auch lustig, aber da sage ich heute nicht zu, weil ich mir das Wochenende nicht versauen will, meldet sich die ganze Woche nicht und heute schreibt er sie teilen ihm mit, dass auch Samstag für mich ein Werktag ist und dann hätte er gerne bis Montag die Papiere. Also das ist ich. Also ich bin einfach nur noch sprachlos aber gut Herr Neumann, da ist die Nummer, wir sehen uns am Montag auf der Baustelle und ja jetzt. Ich werde jetzt mal die ganzen Geflügel hier wegbringen. Wir haben hier völligen milden Befall, nicht nur die Geflügel, sondern wir auch und ja, also sie wissen Bescheid, Montag früh Elektriker anrufen sie komme ich nachmittags also mittags besuchen haben sie gesagt und dem Herrn Architekten Stick ich dann das Püpiert das Wochenende noch
            zu.</p>

        <p>29.09.25, 09:39 - S. Lingreen - PTT-20250929-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250929-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Morgen, Herr Neumann. Ich wollte mal hören, ob sie bei dem Elektriker sich gemeldet haben, was er gesagt hat und ich habe ganz vergessen, meine Tochter fliegt heute im Umlauf um 11:00 Uhr mit, ihre Oma und Opa, wir müssen Sie zum Flughafen bringen und das heißt ich werde um 1 den Termin mit uns beiden nicht schaffen oder 12:30 Uhr dann kommen Sie bitte mich morgen besuchen ich habe jetzt die Sockelabdichtungsmaterialien geholt das ganze Auto ist geparkt. Morgen Terrasse noch den Rest weg und dann fangen wir morgen schon mit der Sockelabdichtung an. Ja, schreiben Sie mir den noch mal bitte wegen dem Elektriker und ich mache jetzt für den für den Herrn. Ich habe jetzt den Namen leider nicht im Kopf für ihren Architekten noch schnell die die Dings fertig den Brief dings da und schicken Ihnen das nachher auch noch ab so und dann geht's morgen los, Terrasse den Rest weg, Container geht ja morgen Nachmittag weg. Und ja, Sockelabdichtung fangen wir auf jeden Fall gleich die Carport Seite an. Die machen wir morgen fertig, also zumindestens die Abdichtung drauf und Gewebe rein und die andere Seite die Draufliegende von der Terrasse gleich mit und dann müssen wir nur noch hinten und vorne okay sie wissen Bescheid, ich werde mich aber trotzdem heute Nachmittag noch mal telefonisch mit ihnen in Verbindung setzen, weil wie gesagt jetzt schwierig zu erreichen und wenn
        sonst irgendwas sein sollte, schreiben sie mir noch mal. Aber das Wichtigste ist ja jetzt nun mal der Elektriker. Weil ohne den können wir ja nicht viel machen, wenn der sagt, er schafft das nicht oder es wird nichts, dann sagen Sie mir bitte Bescheid noch mal. Ich habe noch 2 auf petto okay Herr Neumann, erstmal einen schönen Montag, wir telefonieren uns heute Abend zusammen und ansonsten bin ich kinderfrei jetzt die ist im Urlaub eine Woche Frau frei also ich habe jetzt richtig Luft und bitte auch wieder keine bösen whatsapp oder sonstiges jetzt haben wir wirklich Zeit ich muss auf niemanden Rücksicht nehmen mit keinem zum Arzt. Jetzt können wir die Woche durchhämmern volle Pulle, Herr Neumann, Sie wissen Bescheid, also wie gesagt, für die Zukunft, ich habe keine Lust mehr auf Sticheleien, ich habe das ganze Wochenende mir wirklich in den Kopf gemacht, ich kann das nicht mehr, also wie gesagt, wir entscheiden wie was wo, wir sagen Ihnen Bescheid und jetzt wird die Woche durchgeknallt und der Sockel und alles wird fertig draußen, aber dann muss ich drinne anfangen und wir brauchen ganz dringend jetzt einen Elektriker. Ja wie gesagt mir rennt auch die Zeit davon.</p>


        <p>29.09.25, 09:52 - S. Lingreen - IMG-20250929-WA0001.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20250929-WA0001.jpg" alt="" />

        <p>29.09.25, 09:52 - S. Lingreen - PTT-20250929-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250929-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So den Rennes habe ich im Auto. Jetzt muss ich noch die Armierungsmörtel holen und dann geht das morgen los. Freue mich drauf so Herr Neumann, ich melde mich wie gesagt heute Abend noch mal. Morgen Abend werden sie stolz auf uns sein.</p>

        <p>29.09.25, 15:43 - S. Lingreen - Bitte um Rückmeldung</p>
        29.09.2025, 20:26 - Ulrich - <a href="/images/atg/ulrich_02.msg" download>📩 E-Mail herunterladen</a>
        <p>29.09.25, 20:31 - R. Neumann - Hallo Herr Lindgreen, ich bin im Moment verhindert, es gibt private Probleme. Kontaktieren Sie bitte den Architekten, er hat alle Fäden in der Hand. Er hat ihnen noch eine Email geschickt. vG</p>

        <p>30.09.25, 10:21 - S. Lingreen - PTT-20250930-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250930-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So Guten Morgen, Herr Neumann. Ich habe ihre E Mails bekommen und ich habe Ihnen gestern Abend auch im Telefonat schon gesagt wo wir telefoniert haben, dass ich das so nicht akzeptieren werde. Sie sind für mich der Ansprechpartner, ich habe auch gestern noch mal mit unserem Firmenanwalt telefoniert, bei dem habe ich heute um 13:00 Uhr einen Termin um mich mit ihm völlig zu besprechen was ich machen kann und was ich nicht machen kann und auch er sagte mir gestern Abend schon, dass ich nichts an ihren Architekten was mit Zahlungen. Oder sonstige Auflistungen, was bezahlt werden muss und was nicht rüberschreiben muss, das habe ich nur mit ihnen zu vereinbaren und mit sonst niemanden. Ich habe Ihnen gestern Abend schon gesagt, dann trete ich von der Baustelle zurück, definitiv, dann werde ich die Zwischenrechnung machen für die Bauleistung, die jetzt erfolgt sind und getan worden sind und dann kommt das Restgeld wieder zurück und dann ist die Baustelle für mich erledigt und das liegt jetzt in ihren Händen und nicht in den Händen.</p>

        <p>30.09.25, 12:12 - R. Neumann - Habe nur die Mailbox dran ...</p>

        <p>30.09.25, 12:12 - R. Neumann - Bin jetzt erreichbar.</p>

        <p>01.10.25, 12:18 - R. Neumann - Bitte reichen Sie diese Woche die Rechnung ein. Ab nächste Woche haben Sie nur noch Kontakt über den Archtekten.</p>

        <p>01.10.25, 12:36 - R. Neumann - Ich muss mich korrigieren. Ich brauche die Rechnung morgen früh.</p>

        <p>01.10.25, 13:59 - R. Neumann - Ich würde mich heute gern Nachmittag mit ihnen treffen. Trinken wir mal ein Bier zusammen?</p>

        <p>01.10.25, 14:51 - R. Neumann - Kommen Sie?</p>

        <p>01.10.25, 14:57 - R. Neumann - Ab nächste Woche bin ich nicht mehr erreichbar. Wir sollten klären, wie wir
            jetzt die
            Restarbeiten zu Ende bringen. Ich möchte die aktualisierte Rechnung.</p>

        <p>06.10.25, 12:48 - S. Lingreen - PTT-20251006-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251006-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Tag, Herr Neumann. Ich weiß ja, dass sie die Woche eigentlich nicht erreichbar sind, aber ich wollte Ihnen nur
            mitteilen, Sie haben ja am Samstag selbst das Wetter gesehen, da war es nicht möglich, den Rest der Terrasse wegzustemmen. Ich habe jetzt den Containerdienst noch rechtzeitig angerufen, dass der Container doch bis Donnerstag noch stehen bleibt, weil morgen sagt der Bericht noch mal richtig Regen an und ab Mittwoch ist trocken und dann schick ich Mittwoch die Jungs raus zum Rest von der Betonfläche wegnehmen und wir sind ja dann sowieso verabredet
            mit ihrer Frau. Dann mach ich das an dem Tag und der Containerdienst holt dann am Donnerstag Vormittag den Container ab. Mehr wollte ich gar nicht Bescheid sagen, Liebe Grüße und gute Besserung.</p>

        <p>08.10.25, 09:58 - S. Lingreen - PTT-20251008-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251008-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, dann seien Sie mal bitte noch mal so gut und schicken mir ihre richtige Adresse, dass ich das hier auch auf den auf den Rechnungen alles vernünftig machen kann, damit ich das alles vorbereitet hab. Also einmal bitte die ordentliche Adresse, wo sie gemeldet sind, damit das hier alles vernünftig läuft.</p>

        <p>08.10.25, 09:58 - S. Lingreen - PTT-20251008-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251008-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Verwunderlich ist ja für mich absolut, dass Sie sagen, Sie sind die ganze Woche nicht erreichbar und sie sie fliegen weg oder fahren weg, haben Sie gesagt, sind aber arbeiten, sind in Pause, also so langsam fühle ich mich hier wirklich nur noch komplett verarscht.</p>

        <p>08.10.25, 10:00 - R. Neumann - Unsere Wohnadresse ist: Fuchsstr.5, 17489 Greifswald.</p>

        <p>08.10.25, 10:00 - S. Lingreen - Danke schön</p>

        <p>08.10.25, 10:03 - R. Neumann - Wie bereits gesagt, ich kann kein Kontakt mehr für Sie sein. Meine Frau hat sich heute Nachmittag freigenommen und wird vor Ort sein. Ansonsten bleibt für Sie auch die Möglichkeit, den beauftragten Architekten zu kontaktieren.</p>

        <p>08.10.25, 10:04 - R. Neumann - Also 15:00 Uhr.</p>

        <p>08.10.25, 10:05 - S. Lingreen - PTT-20251008-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251008-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, ich verstehe das zwar alles nicht, aber alles klar, ich kontaktiere jetzt noch mal meinen Rechtsanwalt Bertel, bespreche das mit dem, weil ohne den läuft gar nichts und dann wird er sich da mit ihren Architekten auseinandersetzen, wenn sie sagen, sie sind kein Ansprechpartner mehr, dann muss es halt über den Architekten laufen, dann ist das so.</p>

        <p>08.10.25, 10:05 - S. Lingreen - PTT-20251008-WA0003.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251008-WA0003.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ich gebe Ihnen natürlich nachher noch Bescheid, was der Rechtsanwalt gesagt hat.</p>

        <p>08.10.25, 10:48 - S. Lingreen - PTT-20251008-WA0004.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20250708-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>So, Herr Neumann, ich habe das jetzt abgesprochen. Also unser Rechtsanwalt wird sich jetzt mit ihnen, ihren Architekten in Verbindung setzen und die beiden kümmern sich dann auch um die ganzen Papierkram, auch um die Rückabwicklung, sie haben ihn ja beauftragt in ihren Interesse alles zu machen. Die letzte Frage, die ich jetzt noch habe und dann darf ich auch mit ihnen großartig gar nicht mehr in Kontakt treten, weil das jetzt über den Anwalt läuft, die erste Rechnung, die ich ihnen geschickt habe, auf welches Konto soll die zurück, soll das auf die Rechnung zurück, wie sie mir das auch
        überwiesen haben? Weil dann mache ich die Überweisung doch jetzt schon mal rückgängig und dann ist das schon mal abgeklungen, weil die Arbeiten haben ja jetzt großartig nicht stattgefunden, dann kann er die eine Rechnung mit den 17000 bla bla bla schon wieder zu ihnen zurück und der Rest wird dann über Rechtsanwalt und über ihren Architekten werde ich jetzt eine neue Rechnung noch mal dann erstellen und wird dann zu ihm geschickt und das besprechen
            sie dann und der Rest läuft dann alles nur noch über den Anwalt weil.</p>

        <p>08.10.25, 15:48 - R. Neumann - Heute war niemand vor Ort.</p>

        <p>08.10.25, 15:48 - R. Neumann - Wer ist ihr Anwalt?</p>

        <p>08.10.25, 16:30 - S. Lingreen - PTT-20251008-WA0005.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251008-WA0005.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, ich verstehe ihre whatsapp schon wieder nicht. Ne, Sie wollen mit mir keinen Kontakt haben, ich habe Ihnen ganz klar mitgeteilt, dass ich alles an den Rechtsanwalt weitergebe und ohne Rechtsanwalt jetzt gar nichts mehr läuft. Ich habe Ihnen ganz klar mitgeteilt, dass der Rechtsanwalt sich mit ihren Architekten, wie sie es mir befohlen haben und gesagt haben, in Verbindung setzt zur zur Erledigung der Baustelle und zu dem ganzen Papierkram. Und ich habe sie drum gebeten, mir zu sagen, wo die Summe von den 17000 Loch was Euro auf ihr normales Konto wieder gehen soll oder soll            das woanders draufgehen. Und mehr haben wir miteinander nicht mehr zu reden. Wir betreten die Baustelle nicht mehr, da hat mir der Anwalt ganz klar gesagt, ich werde ihre Baustelle nicht mehr betreten, ich werde da gar nichts mehr machen, es wird jetzt rückabgewickelt und das läuft auch alles nur noch über den Rechtsanwalt Bertel und der wird sich jetzt die Tage morgen schätz ich mal mit ihrem Architekten auseinandersetzen und ich möchte jetzt auch nichts mehr hören,
        nichts mehr lesen, nichts mehr schreiben, gar nichts, das macht jetzt alles die Rechtsanwaltskanzlei und ich bin da raus. Ich habe sie gefragt, wo der wo, das habe ich mir als freigeben lassen, wo die 17000 noch was hin sollen, sollen die auf ihr Konto zurück, das werde ich jetzt auch veranlassen und dann kriegen sie von mir gesondert eine neue Rechnung, jetzt also über einen Rechtsanwalt für die Arbeiten, die wir ausgeführt haben für das was sie gemacht haben, für den Container für alles und dann war es das diese ich bin sprachlos über sie, ganz ehrlich, sie erzählen mir letzte Woche noch sie sind im Urlaub und die ganze Woche nicht erreichbar. Und Sie jetzt hier ein bisschen auf Arbeit. Also es ist alles noch Blödsinn. Lassen Sie mich bitte jetzt in Ruhe, der Rest läuft alles nur noch über die Anwaltskanzlei, der wird sich mit euch in Verbindung setzen. Ich habe eure Telefonnummer abgegeben, ich habe eure e Mail Adresse abgegeben, ich habe von ihrem Architekten alles abgegeben, der wird sich melden das einzigste was sie mir noch sagen können ist wo die 17000 hin sollen und mehr wird der Anwalt machen also schönen Tag noch.</p>

        <p>08.10.25, 16:31 - S. Lingreen - PTT-20251008-WA0006.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251008-WA0006.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Weil auch wir hier lassen uns nicht verarschen.</p>

        <p>09.10.25, 15:11 - R. Neumann - Hallo Herr Lindgreen, hatte gerade einen Anruf von dem Herrn Bahr. Können wir noch mal telefonieren? vG Ralf - <strong>(Bemerkung: Der Anruf wurde von mir getätigt, ich habe den Herrn Bahr kontaktiert)</strong>
        </p>

        <p>09.10.25, 15:20 - S. Lingreen - Hallo Herr Neumann, sie können mich morgen ab 10 uhr jederzeit erreichen. liebe Grüße</p>

        <p>09.10.25, 15:21 - R. Neumann - Ok</p>

        <p>11.10.25, 15:21 - R. Neumann - IMG-20251011-WA0000.jpg (Datei angehängt)</p>
        <img src="/images/atg/IMG-20251011-WA0000.jpg" alt="" />
        <p>Anbei sind die Kontodaten.

        <p>11.10.25, 15:23 - S. Lingreen - 👍 danke</p>

        <p>11.10.25, 15:45 - S. Lingreen - Auf ihren Anruf habe ich gewartet....👍</p>

        <p>11.10.25, 15:48 - R. Neumann - Ich habe den Kieshaufen zugedeckt.</p>

        <p>11.10.25, 22:02 - R. Neumann - Wann erfolgt die Überweisung?</p>

        <p>15.10.25, 15:20 - R. Neumann: Können wir telefonieren?</p>

        <p>15.10.25, 15:40 - S. Lingreen: Was haben Sie zu besprechen?</p>

        <p>15.10.25, 15:42 - R. Neumann: Wir möchten wissen, wann wir das Geld zurück erhalten. Wir haben große Probleme.</p>

        <p>15.10.25, 15:44 - R. Neumann: Wer ist der Anwalt?</p>

        <p>15.10.25, 15:48 - S. Lingreen: Ich rufe sie heute Abend noch zurück...und ihr architekt braucht mich überhaupt nicht kontaktieren....</p>

        <p>15.10.25, 17:19 - S. Lingreen: Bis wann kann ich sie heute erreichen?</p>

        <p>15.10.25, 17:23 - R. Neumann: 17:45 Uhr? Bin gerade unterwegs...</p>

        <p>15.10.25, 17:59 - S. Lingreen: PTT-20251015-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251015-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Jetzt war das Gespräch auf einmal weg. Herr Neumann, ich weiß nicht, was Sie gemacht haben.</p>
        
        <p>15.10.25, 18:19 - R. Neumann: Wie zugesagt, warte ich auf die Kontaktdaten zum Anwalt.</p>

        <p>15.10.25, 18:35 - S. Lingreen: Diese Nachricht wurde gelöscht.</p>

        <p>15.10.25, 18:35 - S. Lingreen: 👍</p>

        <p>15.10.25, 21:16 - R. Neumann: Bisher habe ich nichts empfangen. Bitte senden Sie die Kontaktdaten zum Anwalt.</p>

        <p>16.10.25 10:23 - Anruf von S. Lingreen - Termin vereinbart für 22.10.25 16:30 Uhr. Die 15000 € sollen überwiesen werden. Die Terasse soll bis dahin abgebaut werden und zu diesem Zeitpunkt ist ein Treffen mit dem Anwalt, Maurer und uns geplant.</p>

        <p>17.10.25 09:00 - Anruf von R. Neumann - Bitte um Zusendung des Einzahlbelegs, da der Transfer einige Tage dauern soll.</p>

        <p>20.10.25, 10:47 - S. Lingreen: Guten Morgen...liegt der Schlüssel 🔑 am Haus?</p>

        <p>20.10.25, 10:50 - R. Neumann: Wir haben unter dem Carport aufgeräumt. Der Schlüssel liegt jetzt woanders. Ich habe noch keine Kopie des Einzahlungsbelegs bekommen. Ihre Bank scheint sehr langsam zu arbeiten.</p>

        <p>20.10.25, 11:11 - R. Neumann: Melden Sie sich einfach, wenn Sie dort sind. Dann bringe ich den Schlüssel vorbei.</p>

        <p>20.10.25, 11:13 - S. Lingreen: PTT-20251020-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251020-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Herr Neumann, wie haben Sie für morgen früh eingeplant? Aber ich werde mich heute Abend noch mal bei Ihnen melden. Telefonisch, nach 19:00, wenn es okay ist wegen Arbeit. Ich bin schlecht erreichbar heute. Und dann besprechen wir das, wann wir morgen genau vor Ort sind. Nee, alles klar.</p>

        <p>20.10.25, 11:15 - R. Neumann: Ok</p>

        <p>20.10.25, 18:39 - R. Neumann: Gibt es ein Update?</p>

        <p>21.10.25, 09:00 - R. Neumann: Ich gehe davon aus, dass der Termin morgen 16:00Uhr nicht stattfindet.</p>

        <p>21.10.25, 09:00 - S. Lingreen: Morgen 16 .30 doch</p>

        <p>22.10.25, 13:18 - S. Lingreen: PTT-20251022-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251022-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Guten Tag Herr Neumann, ich habe versucht sie jetzt zweimal zu erreichen, leider kriege ich sie nicht. Sie werden bestimmt wieder in der Sitzung oder Besprechung oder sonst wo sein.Ich habe mich leider mit meinem Anwalt ein bisschen falsch besprochen, der hat sich den Termin für morgen eingetragen, 16.30 Uhr. Das heißt, wir würden, wenn das Ihnen auch passt, morgen um 16.30 Uhr auf der Baustelle sein.  Jetzt wollte ich aber trotzdem nochmal fragen wegen dem Schlüssel, soll die Platte jetzt noch weg oder nicht? Weil dann nehme ich morgen auch gleich einen Anhänger mit und dann sollen die Jungs in der Zeit, wo wir alles regeln und alles machen, das ist ja nur noch eine Stunde anderthalb, die Platte noch runternehmen, damit ich die auch gleich wieder dann mitnehmen kann. Damit die Steine und der ganze Müll dann da weg ist. Also bitte nochmal, um eine Nachricht reicht, weil wir haben heute Einstallpflicht, Geflügelpest ist ausgebrochen und heute müssen alle Tiere rein. Das finde ich ein bisschen schwer zu erreichen, deswegen habe ich versucht anzurufen. Also einmal bitte nur Rückmeldung, ob in der Zeit, wo wir morgen da sitzen und das alles klären, vernünftig die Jungs die Platte runternehmen sollen.</p>

        <p>22.10.25, 13:20 - S. Lingreen: ???</p>

        <p>22.10.25, 13:21 - S. Lingreen: PTT-20251022-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251022-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Das ist auch wieder so lustig, Herr Neumann, ans Telefon können Sie nicht gehen, aber Nachrichten können Sie lesen. Also das ist eine Verarsche mit Ihnen, das geht gar nicht. Ich brauche eine Antwort, damit ich das klären kann.</p>

        <p>22.10.25, 13:22 - R. Neumann: Muss erst mal mit meiner Frau abstimmen, ob wir morgen kommen können. Melde mich zurück.</p>

        <p>22.10.25, 13:22 - S. Lingreen: Lieben Dank</p>

        <p>22.10.25, 13:23 - S. Lingreen: dürfen wir trotzdem die Platte morgen runter nehmen?</p>

        <p>22.10.25, 13:26 - R. Neumann: Ja, gern. Rufen Sie mich morgen an, wenn Sie dort sind. Wir halten uns den Termin morgen 16:30 Uhr frei.</p>

        <p>22.10.25, 13:26 - R. Neumann: Wann sind sie morgen dort?</p>

        <p>22.10.25, 13:26 - S. Lingreen: PTT-20251022-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251022-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Okay, super, dann rufe ich trotzdem morgen Vormittag an, wenn wir vor Ort sind, weil wir wollen ja die Platte weghaben, das haben wir ja noch versprochen, das machen wir. Ich bespreche das jetzt mit den Jungs und werde denen heute Abend nochmal schreiben, wann wir morgen da sind.</p>

        <p>23.10.25, 14:34 - S. Lingreen: IMG-20251023-WA0000.jpg (Datei angehängt)</p>

        <img src="/images/atg/IMG-20251023-WA0000.jpg" alt="" />


        <p>23.10.25, 14:38 - S. Lingreen: PTT-20251023-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251023-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Ja, Herr Neumann, was soll ich wieder sagen? Erstmal guten Tag zum Kotzen. Ich habe mir jetzt den ganzen Nachmittag freigehalten hier, aber ich kann es ja nicht ändern. Ich habe Ihnen das jetzt weitergeleitet. Er wird sich morgen mit Ihnen telefonisch in Verbindung setzen. Ich habe gesagt, er soll Sie bitte anrufen und den Termin mit Ihnen vereinbaren oder ausmachen. Ich halte mich da völlig, ich bin da völlig spontan und richte mich nach Euch. Und ja, also Herr Rechtsanwalt ruft Sie morgen an, bespricht den Termin mit Ihnen und dann sagen Sie mir bitte Bescheid. Ob das am Montag dann klappt oder wann es Ihnen am besten passt oder wie es auch immer ist. Ich kotze hier einfach ab. Das hätten wir so schön heute alles erledigt haben können.</p>

        <p>23.10.25, 14:38 - S. Lingreen: PTT-20251023-WA0002.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251023-WA0002.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Wäre natürlich schön, wenn Sie mir heute nochmal Bescheid sagen würden, so wie er jetzt schreibt hier mit dem Termin, ob das Montag klappt oder nicht, weil ich hätte Montag eigentlich einen Termin, aber den würde ich jetzt absagen und wäre natürlich dann Montag bei euch, weil ich das ja auch geklärt haben will, aber wäre schön, wenn ich da nochmal Rücksprache mit Ihnen halten könnte, ob das für Sie Montag auch klappt. Dann muss ich da heute nämlich auch anrufen, dass ich Montag meinen anderen Termin nicht wahrnehmen kann.</p>

        <p>23.10.25, 14:49 - R. Neumann: Wer ist der Anwalt?</p>

        <p>23.10.25, 19:32 - R. Neumann: Hallo Herr Lindgreen, können Sie mir bitte den Überweisungsbeleg senden?</p>

        <p>23.10.25, 19:34 - R. Neumann: Sie haben mir diesen für heute zugesichert.</p>

        <p>24.10.2025 - <strong>11 Minuten Gespräch mit der ATG Altbauabdichtung Technologie Gelinjektion Sekretärin (0381 2035276). Es wurde von mir um ein Gesprächstermin im ATG Büro gebeten. Das ist aber nicht möglich, stattdessen schickt man einen Gutachter vor Ort. Anschließend habe ich von meinen Erfahrungen mit dem Gutachter berichtet. Es erfolgte dann ein Rückruf vom "Vorstand"</strong></p>

        <p>29.10.25, 10:22 - S. Lingreen: Am Freitag ist schönes Wetter....Ich würde die Terrasse gerne abreißen</p>

        <p>30.10.25, 14:36 - R. Neumann: Ok</p>

        <p>30.10.25, 15:46 - R. Neumann: Ich habe jemanden gefunden, der den Schlüssel vorbei bringt, wenn Sie dort sind. Melden Sie sich dann einfach.</p>

        <p>03.11.25, 13:24 - S. Lingreen: ?</p>

        <p>03.11.25, 13:25 - S. Lingreen: PTT-20251103-WA0000.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251103-WA0000.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Das hat aber wieder gar nicht geklappt letzte Woche. Ich kann Ihnen zwei Tage vorher schreiben und Sie schreiben mir zwei Tage später erst zurück. Dann habe ich schon wieder einen neuen Auftrag. So, dasselbe jetzt wieder für Donnerstag. Donnerstag habe ich die Jungs frei. Liegt ein Schlüssel da, ist Strom da, können wir die Terrasse wegnehmen. Ja oder nein.</p>

        <p>03.11.25, 13:28 - R. Neumann: Natürlich dürfen sie diese abbauen, auch am Donnerstag.</p>

        <p>03.11.25, 13:36 - S. Lingreen: PTT-20251103-WA0001.opus (Datei angehängt)</p>
        <br><audio controls>
            <source src="/images/atg/PTT-20251103-WA0001.opus" type="audio/ogg; codecs=opus" />
        </audio>
        <p><b>Transkript: </b>Okay. Super, Herr Neumann. Danke. Dann plane ich das für Donnerstag ein.</p>

        <p>05.11.25, 12:23 - R. Neumann: Hallo Herr Lindgreen, ab wann sind sie morgen in der Klaus-Groth-Str.?</p>

        <h2>Aktueller Zustand 21.04.2026</h2>
        <img src="/images/atg/20251009_181221.jpg" alt="" />
        <p>Sandhaufen wurde von R.Neumann zugedeckt. </p>
        <img src="/images/atg/20251009_181230.jpg" alt="" />
        <p>Stand Terassenabbruch</p>
        <img src="/images/atg/20251009_181244.jpg" alt="" />
        <p>Arbeiten für äußere Sockelabdichtung nicht begonnen.</p>
        <img src="/images/atg/20251009_181250.jpg" alt="" />
        <p>geplante äußere Sockelabdichtung</p>
        <img src="/images/atg/20251009_181303.jpg" alt="" />
        <p>Terassenabbruch</p>
        <img src="/images/atg/20251009_181323.jpg" alt="" />
        <p></p>Beschädigte Außenwand (Gefahr von Feuchtigkeit)</p>
        <img src="/images/atg/20251009_181337.jpg" alt="" />

      <p>20.05.2026 - <strong>10 Minutengespräch mit dem ATG Standort in Erfurt (0361 5514845) und Bitte um einen Termin für die Nachkontrollmessung. Es wurde versichert, dass sich jemand melden wird.</strong></p>
`

const CHAT_HEADER_PATTERN =
  /^\d{2}\.\d{2}\.\d{2,4}(?:,?\s*\d{1,2}:\d{2})?(?:\s*-\s*|:\s*)/

function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function isMessageHeader(element: Element | null) {
  if (!element || element.tagName !== 'P') {
    return false
  }

  return CHAT_HEADER_PATTERN.test(normalizeText(element.textContent ?? ''))
}

function createMessageEntry(doc: Document, headerText: string) {
  const article = doc.createElement('article')
  article.className = 'atg-entry'

  if (headerText.includes('R. Neumann')) {
    article.classList.add('atg-entry--owner')
  } else if (headerText.includes('S. Lingreen')) {
    article.classList.add('atg-entry--partner')
  } else {
    article.classList.add('atg-entry--neutral')
  }

  const bubble = doc.createElement('div')
  bubble.className = 'atg-entry__bubble'
  article.appendChild(bubble)

  return { article, bubble }
}

function appendFormattedNode(
  doc: Document,
  target: HTMLElement,
  sourceNode: ChildNode,
) {
  if (sourceNode.nodeType === Node.TEXT_NODE) {
    const text = normalizeText(sourceNode.textContent ?? '')

    if (!text) {
      return
    }

    const paragraph = doc.createElement('p')
    paragraph.className = 'atg-entry__text'
    paragraph.textContent = text
    target.appendChild(paragraph)
    return
  }

  if (sourceNode.nodeType !== Node.ELEMENT_NODE) {
    return
  }

  const sourceElement = sourceNode as HTMLElement

  if (sourceElement.tagName === 'BR') {
    return
  }

  const element = sourceElement.cloneNode(true) as HTMLElement

  if (element.tagName === 'IMG' || element.tagName === 'VIDEO') {
    const media = doc.createElement('figure')
    media.className = 'atg-media'
    media.appendChild(element)
    target.appendChild(media)
    return
  }

  if (element.tagName === 'AUDIO') {
    const audioWrap = doc.createElement('div')
    audioWrap.className = 'atg-audio'
    audioWrap.appendChild(element)
    target.appendChild(audioWrap)
    return
  }

  if (element.tagName === 'P') {
    element.classList.add('atg-entry__text')
  }

  if (element.tagName === 'UL' || element.tagName === 'OL') {
    element.classList.add('atg-list')
  }

  target.appendChild(element)
}

function formatAtgContent(source: string) {
  if (typeof DOMParser === 'undefined') {
    return source
  }

  const parser = new DOMParser()
  const doc = parser.parseFromString(`<div>${source}</div>`, 'text/html')
  const root = doc.body.firstElementChild

  if (!root) {
    return source
  }

  const wrapper = doc.createElement('div')
  wrapper.className = 'atg-layout'

  const overview = doc.createElement('section')
  overview.className = 'atg-panel atg-panel--overview'

  const chat = doc.createElement('section')
  chat.className = 'atg-chat'

  const chatHeader = doc.createElement('div')
  chatHeader.className = 'atg-chat-header'

  const chatLabel = doc.createElement('p')
  chatLabel.className = 'atg-chat-label'
  chatLabel.textContent = 'Chatverlauf'
  chatHeader.appendChild(chatLabel)

  const chatHint = doc.createElement('p')
  chatHint.className = 'atg-chat-hint'
  chatHint.textContent =
    'Nachrichten, Medien und Dokumente sind in einzelne Einträge gegliedert.'
  chatHeader.appendChild(chatHint)

  chat.appendChild(chatHeader)

  let inChat = false
  let currentEntry: ReturnType<typeof createMessageEntry> | null = null

  const flushEntry = () => {
    if (!currentEntry) {
      return
    }

    chat.appendChild(currentEntry.article)
    currentEntry = null
  }

  for (const node of Array.from(root.childNodes)) {
    const element = node.nodeType === Node.ELEMENT_NODE ? node as HTMLElement : null
    const text = normalizeText(node.textContent ?? '')

    if (
      element &&
      /^H[23]$/.test(element.tagName) &&
      text.toLowerCase() === 'chat verlauf'
    ) {
      inChat = true
      flushEntry()
      continue
    }

    if (!inChat) {
      appendFormattedNode(doc, overview, node)
      continue
    }

    if (element && /^H[23]$/.test(element.tagName)) {
      flushEntry()
      const headingWrap = doc.createElement('div')
      headingWrap.className = 'atg-divider'
      appendFormattedNode(doc, headingWrap, node)
      chat.appendChild(headingWrap)
      continue
    }

    if (isMessageHeader(element)) {
      const headerElement = element!

      flushEntry()
      currentEntry = createMessageEntry(
        doc,
        normalizeText(headerElement.textContent ?? ''),
      )

      const meta = doc.createElement('p')
      meta.className = 'atg-entry__meta'
      meta.innerHTML = headerElement.innerHTML
      currentEntry.bubble.appendChild(meta)
      continue
    }

    if (!currentEntry) {
      currentEntry = createMessageEntry(doc, 'Allgemein')
    }

    appendFormattedNode(doc, currentEntry.bubble, node)
  }

  flushEntry()

  wrapper.appendChild(overview)
  wrapper.appendChild(chat)

  return wrapper.innerHTML
}

export default function Atg() {
  const formattedContent = useMemo(() => formatAtgContent(atgContent), [])

  return (
    <section className="atg">
      <div className="atg-header">
        <p className="atg-kicker">ATG</p>
        <h3>Kellersanierung und Verlauf</h3>
        <p>
          Der Verlauf ist kompakter gesetzt, Nachrichten sind als einzelne
          Einträge getrennt und Medien werden in einer ruhigeren Größe
          dargestellt.
        </p>
      </div>

      <div
        className="atg-content"
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </section>
  )
}
