
const priorityOptions = [
    { id: "default", value: "", label: "Please select a priority" },
    { id: "priority1", value: "High", label: "High" },
    { id: "priority2", value: "Medium", label: "Medium" },
    { id: "priority3", value: "Low", label: "Low" },
  ];

export default function Formarchi()
{
    return (
        <>
            <h1>Formular zum Ausfüllen durch den Architekten</h1>
            
            <form>

                <fieldset>

                    <legend><h2>1. Allgemeine Angaben</h2></legend>
                    <div className="container flex-column">{/* container für Adresse */}
                        <h4>Objektstandort</h4>
                        <div className="spacebetween">
                            <label for="objektbez">Objektbezeichnung: </label>
                            <input type="text" id="objektbez" name="objektbez" placeholder="Objektbezeichnung / Art der Nutzung" />
                        </div>

                        <div className="spacebetween">
                            <label for="standort">Standort: </label>
                            <input type="text" id="standort" name="standort" placeholder="Standort des Objekts" />
                        </div>

                        <div className="spacebetween">
                            <label for="strasse">Straße, Nr.: </label>
                            <input type="text" id="strasse" name="strasse" placeholder="Straße und Hausnummer des Objekts" />
                        </div>

                        <div className="spacebetween">
                            <label for="landkreis">Landkreis: </label>
                            <input type="text" id="landkreis" name="landkreis" placeholder="Landkreis des Objekts" />
                        </div>

                        <div className="spacebetween">
                            <label for="bundesland">Bundesland: </label>
                            <input type="text" id="bundesland" name="bundesland" placeholder="Bundesland des Objekts" />
                        </div>
                    </div>

                    <div className="container">{/* Container Bauzeiten */}
                        <h4>Bauzeiten</h4>
                        <div className="spacebetween">
                            <label for="planungsbeginn">Planungsbeginn: </label>
                            <input type="text" id="planungsbeginn" name="planungsbeginn" placeholder="Planungsbeginn des Objekts" />
                        </div>

                        <div className="spacebetween">
                            <label for="vergabe">Haupt-/Rohbauvergabe: </label>
                            <input type="text" id="vergabe" name="vergabe" placeholder="Haupt-/Rohbauvergabe" />
                        </div>

                        <div className="spacebetween">
                            <label for="baubeginn">Baubeginn: </label>
                            <input type="text" id="baubeginn" name="baubeginn" placeholder="Baubeginn" />
                        </div>

                        <div className="spacebetween">
                            <label for="bauende">Bauende: </label>
                            <input type="text" id="bauende" name="bauende" placeholder="Bauende" />
                        </div>
                    </div>

                    <div className="container">{/* Adressen Planer & Co */}
                        <h4>Architekt*in / Planer*in</h4>

                        <div className="spacebetween">
                            <label for="archi-name">Architekt*in / Planer*in: </label>
                            <input type="text" id="archi-name" name="archi-name" placeholder="Architekt*in / Planer*in" />
                        </div>

                        <div className="spacebetween">
                            <label for="archi-strasse">Straße, Nr.: </label>
                            <input type="text" id="archi-strasse" name="archi-strasse" placeholder="Straße und Hausnummer" />
                        </div>

                        <div className="spacebetween">
                            <label for="archi-ort">PLZ & Ort: </label>
                            <input type="text" id="archi-ort" name="archi-ort" placeholder="PLZ & Ort" />
                        </div>

                        <div className="spacebetween">
                            <label for="archi-web">Homepage</label>
                            <input type="text" id="archi-web" name="archi-web" placeholder="Webseite" />
                        </div>

                    </div>

                    <div className="container">{/* Bauherr */}
                        <h4>Bauherr*in</h4>

                        <div className="spacebetween">
                            <label for="bauherr-name">Bauherr*in: </label>
                            <input type="text" id="bauherr-name" name="bauherr-name" placeholder="Bauherr*in" />
                        </div>

                        <div className="spacebetween">
                            <label for="bauherr-strasse">Straße, Nr.: </label>
                            <input type="text" id="bauherr-strasse" name="bauherr-strasse" placeholder="Straße und Hausnummer" />
                        </div>

                        <div className="spacebetween">
                            <label for="bauherr-ort">PLZ & Ort: </label>
                            <input type="text" id="bauherr-ort" name="bauherr-ort" placeholder="PLZ & Ort" />
                        </div>

                    </div>

                    <div className="container">{/* Fotograf */}
                        <h4>Fotograf*in</h4>

                        <div className="spacebetween">
                            <label for="fotograf-name">Fotograf*in: </label>
                            <input type="text" id="fotograf-name" name="fotograf-name" placeholder="Fotograf*in" />
                        </div>

                        <div className="spacebetween">
                            <label for="fotograf-strasse">Straße, Nr.: </label>
                            <input type="text" id="fotograf-strasse" name="fotograf-strasse" placeholder="Straße und Hausnummer" />
                        </div>

                        <div className="spacebetween">
                            <label for="fotograf-ort">PLZ & Ort: </label>
                            <input type="text" id="fotograf-ort" name="fotograf-ort" placeholder="PLZ & Ort" />
                        </div>
                        
                        <div className="spacebetween">
                            <label for="fotograf-web">Homepage</label>
                            <input type="text" id="fotograf-web" name="fotograf-web" placeholder="Webseite" />
                        </div>

                    </div>


                    <div className="container">{/* Container Nutzeinheiten */}
                        <h4>Nutzeinheiten</h4>

                        <div className="spacebetween">
                            <label for="anz-buero">Bürogebäude: </label>
                            <input type="text" id="anz-buero" name="anz-buero" placeholder="Anzahl Arbeitsplätze" />
                        </div>

                        <div className="spacebetween">
                            <label for="anz-institut">Institutsgebäde: </label>
                            <input type="text" id="anz-institut" name="anz-institut" placeholder="Anzahl Arbeitsplätze" />
                        </div>

                        <div className="spacebetween">
                            <label for="anz-krankenhaus">Krankenhaus: </label>
                            <input type="text" id="anz-krankenhaus" name="anz-krankenhaus" placeholder="Anzahl Betten" />
                        </div>

                        <div className="spacebetween">
                            <label for="anz-pflegeheim">Pflegeheim: </label>
                            <input type="text" id="anz-pflegeheim" name="anz-pflegeheim" placeholder="Anzahl Betten" />
                        </div>

                        <div className="spacebetween">
                            <label for="anz-schule">Schule: </label>
                            <input type="text" id="anz-schule" name="anz-schule" placeholder="Anzahl Klassen/Schüler" />
                        </div>

                        <div className="spacebetween">
                            <label for="anz-kindergarten">Kindergarten: </label>
                            <input type="text" id="anz-kindergarten" name="anz-kindergarten" placeholder="Anzahl Gruppen/Kinder" />
                        </div>

                        <div className="spacearound">
                            <input type="text" id="sonstiges" name="sonstiges" placeholder="sonstiges" />
                            <p>Anzahl: </p><input type="text" id="anz-sonstiges" name="anz-sonstiges" placeholder="Anzahl Gruppen/Kinder" />
                        </div>
                    </div>

                </fieldset>

                <fieldset>

                    <legend><h2>2. Objektbeschreibung</h2></legend>

                    <div className="objektbeschreibung">
                        <h4>Nutzung</h4>

                        <div>
                            <p>(UG/s)</p>
                            <div>
                                <label for="anz-ug">Anzahl: </label>
                                <input type="number" id="anz-ug" name="anz-ug" className="number" />
                            </div>
                            <div>
                                <label for="txt-ug">Beschreibung: </label>
                                <textarea rows="2" cols="40" id="txt-ug" name="txt-ug" placeholder="Räume des Untergeschosses z.B. Gästezimmer, Badezimmer"></textarea>
                            </div>
                        </div>

                        <div>
                            <p>(EG/s)</p>
                            <div>
                                <label for="anz-eg">Anzahl: </label>
                                <input type="number" id="anz-eg" name="anz-eg" className="number" />
                            </div>
                            <div>
                                <label for="txt-eg">Beschreibung: </label>
                                <textarea rows="2" cols="40" id="txt-eg" name="txt-eg" placeholder="Räume des Untergeschosses z.B. Gästezimmer, Badezimmer"></textarea>
                            </div>
                        </div>

                        <div>
                            <p>(OG/s)</p>
                            <div>
                                <label for="anz-og">Anzahl: </label>
                                <input type="number" id="anz-og" name="anz-og" className="number" />
                            </div>
                            <div>
                                <label for="txt-og">Beschreibung: </label>
                                <textarea rows="2" cols="40" id="txt-og" name="txt-og" placeholder="Räume des Untergeschosses z.B. Gästezimmer, Badezimmer"></textarea>
                            </div>
                        </div>

                        <div>
                            <p>(DG/s)</p>
                            <div>
                                <label for="anz-dg">Anzahl: </label>
                                <input type="number" id="anz-dg" name="anz-dg" className="number" />
                            </div>
                            <div>
                                <label for="txt-dg">Beschreibung: </label>
                                <textarea rows="2" cols="40" id="txt-dg" name="txt-dg" placeholder="Räume des Untergeschosses z.B. Gästezimmer, Badezimmer"></textarea>
                            </div>
                        </div>


                    </div>

                    <div className="objektbeschreibung-beschreibung">
                        <h4>Beschreibung</h4>

                        <div>
                            <label for="allg-infos">Allgemeine Objektinformationen: </label>
                            <textarea rows="15" cols="80" id="allg-infos" name="allg-infos" className="textarea-margin" placeholder="zusätzliche Objektinformationen. Siehe auch nebenstehender Beispieltext." ></textarea>
                        </div>
                        
                        <div>
                            <label for="baukonstruktion">Baukonstruktion: </label>
                            <textarea rows="15" cols="80" id="baukonstruktion" name="baukonstruktion" className="textarea-margin"  placeholder="zusätzliche Informationen zur Baukonstruktion als Ergänzung zur Beschreibung im Tabellenblatt &quot;Kosten DIN 276&quot; Siehe auch nebenstehender Beispieltext. Die Informationen können auch als separate Dateien mitgeliefert werden." ></textarea>
                        </div>

                        <div>
                            <label for="techn-anlagen">Technische Anlagen: </label>
                            <textarea rows="15" cols="80" id="techn-anlagen" name="techn-anlagen" className="textarea-margin"  placeholder="zzusätzliche Informationen zur Baukonstruktion als Ergänzung zur Beschreibung im Tabellenblatt &quot;Kosten DIN 276&quot; Siehe auch nebenstehender Beispieltext. Die Informationen können auch als separate Dateien mitgeliefert werden." ></textarea>
                        </div>

                        <div>
                            <label for="obj-beschr-sonstiges">Sonstiges: </label>
                            <textarea rows="15" cols="80" id="obj-beschr-sonstiges" name="obj-beschr-sonstiges" className="textarea-margin"  placeholder="zusätzliche interessante Informationen zum Objekt Siehe auch nebenstehender Beispieltext. Die Informationen können auch als separate Dateien mitgeliefert werden." ></textarea>
                        </div>

                    </div>

                </fieldset>

                <fieldset>
                    <legend><h2>3. Kosteneinflüsse</h2></legend>
                    
                    
                    <h3>Region:</h3>
                    <div className="kosteneinfluesse">

                        <p>Die Zuordnung sinngemäß vornehmen, z. B. Großstadt auch dann ankreuzen, wenn der Standort des Objekts zwar eine nichtstädtische Gemeinde (Land) ist, die aber im Hinblick auf die Angebotssituation für Bauleistungen im Einzugsgebiet einer Großstadt liegt.</p>
                        <div>
                            <div>
                                <input type="radio" id="region-laendlich" name="region" value="laendlicher-raum" />
                                <label for="region">ländlicher Raum</label>
                            </div>
                            <div>
                                <input type="radio" id="region-stadt" name="region" value="Stadt" />
                                <label for="region">Stadt</label>
                            </div>
                            <div>
                                <input type="radio" id="region-grossstadt" name="region" value="grosstadt" />
                                <label for="region">Großstadt</label>
                            </div>
                        </div>
                    </div>

                    <h3>Konjunktur:</h3>
                    <div className="kosteneinfluesse">

                    <p>Ihre Einschätzung zum Zeitpunkt der Hauptvergabe: schwach = Rezessionsphase, sehr günstige Angebote mittel = durchschnittliche Angebotssituation hoch = Hochkonjunktur, große Baunachfrage, relativ hohe Angebotspreise.</p>
                    <div>
                        <div>
                            <input type="radio" id="konjunktur-schwach" name="konjunktur" value="schwach" />
                            <label for="konjunktur">schwach</label>
                        </div>
                        <div>
                            <input type="radio" id="konjunktur-mittel" name="konjunktur" value="mittel" />
                            <label for="konjunktur">mittel</label>
                        </div>
                        <div>
                            <input type="radio" id="konjunktur-hoch" name="konjunktur" value="hoch" />
                            <label for="konjunktur">hoch</label>
                        </div>
                    </div>
                    </div>

                    <h3>Standard:</h3>
                    <div className="kosteneinfluesse">
                        {/* <p>Beschr.</p> */}
                        <div>
                            <div>
                                <input type="radio" id="standard-schwach" name="standard" value="einfach" />
                                <label for="standard">einfach</label>
                            </div>
                            <div>
                                <input type="radio" id="standard-mittel" name="standard" value="mittel" />
                                <label for="standard">mittel</label>
                            </div>
                            <div>
                                <input type="radio" id="standard-hoch" name="standard" value="hoch" />
                                <label for="standard">hoch</label>
                            </div>
                        </div>
                    </div> 

                        <h3>Grundstück:</h3>
                        <p>Beschreibung der Homogenbereiche für das Gewerk Erdarbeiten. Die Informationen können auch als separate Datei mitgeliefert werden (z.B. Geotechnischer Bericht)</p>
                        <div className="flex-column">
                            <label for="kosteneinfluss-grundstueck">Homogenbereiche (Gewerk, Erdarbeiten): </label>
                            <textarea rows="15" cols="80" id="kosteneinfluss-grundstueck" name="kosteneinfluss-grundstueck" className="textarea-margin"  placeholder="zusätzliche interessante Informationen zum Objekt Siehe auch nebenstehender Beispieltext. Die Informationen können auch als separate Dateien mitgeliefert werden." ></textarea>
                        </div>


                    <h3>Bodenklasse</h3>
                    <div className="bodenklasse">
                        <p>von</p>
                        <select name="bodenklasse" required>
                            <option> - </option>
                            <option>BK1</option>
                            <option>BK2</option>
                            <option>BK3</option>
                            <option>BK4</option>
                            <option>BK5</option>
                            <option>BK6</option>
                            <option>BK7</option>
                        </select>
                        <p>bis</p>
                        <select name="bodenklasse" required>
                            <option> - </option>
                            <option>BK1</option>
                            <option>BK2</option>
                            <option>BK3</option>
                            <option>BK4</option>
                            <option>BK5</option>
                            <option>BK6</option>
                            <option>BK7</option>
                        </select>
                    </div>

                    <h3>Neigung:</h3>
                    <div className="kosteneinfluesse">
                        <div>
                            <div>
                                <input type="radio" id="neigung-eben" name="neigung" value="eben" />
                                <label for="neigung">eben</label>
                            </div>
                            <div>
                                <input type="radio" id="neigung-geneigt" name="neigung" value="geneigt" />
                                <label for="neigung">geneigt</label>
                            </div>
                            <div>
                                <input type="radio" id="neigung-hanglage" name="neigung" value="hanglage" />
                                <label for="neigung">Hanglage</label>
                            </div>
                        </div>
                    </div>

                    <h3>Bauraum:</h3>
                    <div className="kosteneinfluesse">
                        <div>
                            <div>
                                <input type="radio" id="bauraum-frei" name="bauraum" value="frei" />
                                <label for="bauraum">frei</label>
                            </div>
                            <div>
                                <input type="radio" id="bauraum-beengt" name="bauraum" value="beengt" />
                                <label for="bauraum">beengt</label>
                            </div>
                            <div>
                                <input type="radio" id="bauraum-bauluecke" name="bauraum" value="bauluecke" />
                                <label for="bauraum">Baulücke</label>
                            </div>
                        </div>
                    </div>

                    <h3>Besondere Auflagen:</h3>
                    <div className="besondereauflagen">

                        <div>
                            <div>
                                <input type="checkbox" name="besauflagen1" id="besauflagen1" />
                                <label for="besauflagen1">Denkmalschutz</label>
                            </div>

                            <div>
                                <input type="checkbox" name="besauflagen2" id="besauflagen2" />
                                <label for="besauflagen2">Brandschutz</label>
                            </div>

                            <div>
                                <input type="checkbox" name="besauflagen3" id="besauflagen3" />
                                <label for="besauflagen3">Wärmeschutz</label>
                            </div>

                            <div>
                                <input type="checkbox" name="besauflagen7" id="besauflagen7" />
                                <input type="text"></input>
                            </div>
                        </div>

                    <div>
                        <div>
                            <input type="checkbox" name="besauflagen4" id="besauflagen4" />
                            <label for="besauflagen4">Gestaltungssatzung</label>
                        </div>

                        <div>
                            <input type="checkbox" name="besauflagen5" id="besauflagen5" />
                            <label for="besauflagen5">Schallschutz</label>
                        </div>

                        <div>
                            <input type="checkbox" name="besauflagen6" id="besauflagen6" />
                            <label for="besauflagen6">Emissionsschutz</label>
                        </div>
                    </div>




                    </div>



                </fieldset>

                <fieldset>
                    <legend><h2>4. Flächen und Rauminhalte DIN 277-1: 2016-01</h2></legend>
                    {/* <p>Tabelle</p> */}

                </fieldset>

                <fieldset>
                    <legend><h2>5. Kosten nach DIN 276: 2018/12 / Beschreibung</h2></legend>
                    {/* <p>Tabelle</p> */}

                </fieldset>
                <fieldset>
                    <legend><h2>6. Weitere Projektangaben</h2></legend>
                    {/* <p>Tabelle</p> */}

                </fieldset>

                <fieldset>
                    <legend><h2>Hochladen von Unterlagen</h2></legend>
                {/* Upload Dateien */}

                </fieldset>

                <button href="#" className="button">Speichern</button>
                <button href="#" className="button">Unterlagen an BKI senden</button>

            </form>
        
        </>
    );
}