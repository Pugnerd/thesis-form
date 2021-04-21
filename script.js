function pageLoad() {
	// const button = document.querySelector("button")
	// const emptyspace = document.getElementById("empty")

	// button.addEventListener('click', event => {
	// 	emptyspace.innerHTML = "KÖSZÖNÖM HOGY KITÖLTÖTTED!";
	// 	button.style.display = none;
	// });

	// button.addEventListener('click', ev => ev.target.style.display = 'none');

	const form = document.getElementById("autoform");
	data = [
		{
			question: "Életkor",
			type: 'number',
			choice: [''],
			varname: 'age',
		},
		{
			question: "Nem",
			type: 'radio',
			choice: ['Férfi', 'Nő'],
			varname: 'gender',
		},
		{
			question: "1. Utazott-e Ön szabadidejében bárhová a COVID-19 pandémia magyarországi kirobbanása (2020 március) óta? (Több választ is megjelölhet)",
			type: 'checkbox',
			choice: [
				'Igen, 2020 tavaszán (március-május) belföldön',
				'Igen, 2020 tavaszán (március-május) külföldre',
				'Igen, 2020 nyarán (június – augusztus) belföldön',
				'Igen, 2020 nyarán (június – augusztus) külföldre',
				'Igen, 2020 őszén (szeptember – november) belföldön',
				'Igen, 2020 őszén (szeptember – november) külföldre',
				'Igen, 2020/21 telén (december – február) belföldön',
				'Igen, 2020/21 telén (december – február) külföldre',
				'Igen, 2021 márciusa óta belföldön',
				'Igen, 2021 márciusa óta külföldre',
				'Nem utaztam sehová'
			],
			varname: 'q1',
			counter: []
		},
		{
			question: "2. Tervez-e utazást 2021 májusa után?",
			type: 'radio',
			choice: [
				{
					a1: 'Igen, de csak belföldre',
				},
				'Igen, külföldi utazást tervezek',
				'Igen, külföldre és belföldön egyaránt utazni fogok',
				'Erre az évre még semmiképpen sem tervezek',
				'Még nem tudom, a járványhelyzettől függ'

			],
			varname: 'q2'
		},
		{
			question: "3. A COVID-19 pandémia kirobbanása ELŐTT vette-e igénybe az utazási irodák szolgáltatásait?",
			type: 'radio',
			choice: [
				'Igen, de csak valamilyen részszolgáltatást (szállást, repülőjegyet stb.) foglaltam',
				'Igen, teljes utazási csomagot vásároltam ',
				'Egyéb, és pedig: <input type="text">',
				'Nem vettem igénybe'
			],
			varname: 'q3'
		},
		{
			question: "4. A COVID-19 pandémia kirobbanása ÓTA vette-e igénybe az utazási irodák szolgáltatásait?",
			type: 'radio',
			choice: [
				'Igen, de csak valamilyen részszolgáltatást (szállást, repülőjegyet stb.) foglaltam',
				'Igen, teljes utazási csomagot vásároltam ',
				'Egyéb, és pedig: <input type="text">',
				'Nem vettem igénybe'
			],
			varname: 'q4'
		},
		{
			question: "5. Önnek volt-e befizetett, de meg nem valósult utazása 2020-ban?",
			type: 'radio',
			choice: [
				'Igen, mert lemondtam az utazást',
				'Igen, mert lemondta a szolgáltató vagy az utazási iroda  (pl. törölték a járatot, lemondta az utazási iroda)',
				'Nem volt, mert nem volt befizetett utazásom',
				'Nem volt, minden tervezett utazásom megvalósult'
			],
			varname: 'q5'
		},
		{
			question: "6. Mi a véleménye a koronavírus elleni oltakozásról?",
			type: 'radio',
			choice: [
				'Be vagyok oltva elsősorban mert szeretnék végre utazni',
				'Be vagyok oltva elsősorban mert nem szeretnék megfertőződni és másokat megfertőzni',
				'Nem vagyok beoltva, de szeretném felvenni az oltást elsősorban mert szeretnék végre utazni ',
				'Nem vagyok beoltva, de szeretném felvenni az oltást elsősorban mert nem szeretnék megfertőződni és másokat megfertőzni',
				'Nem vagyok beoltva és nem is fogom felvenni az oltást',
				'Ha oltáshoz kötnék a belföldi turisztikai és vendéglátó szolgáltatások igénybevételét, beadatná magának akármelyik vakcinát'
			],
			varname: 'q6'
		},
		{
			question: "7. A következő utazások tervezésekor előtérbe kerül-e Önnél a zsúfolt fogadóterületek és látnivalók elkerülése?",
			type: 'radio',
			choice: [
				'Igen',
				'Nem ',
				'Még nem tudom'
			],
			varname: 'q7'
		},
		{
			question: "8. A szálláshely igénybevételekor befolyásolja-e önt a pandémia?",
			type: 'radio',
			choice: [
				'Nem, ugyanolyan szálláshelyet fogok igénybe venni, mint korábban',
				'Igen, inkább önellátást biztosító apartmant választok majd',
				'Még nem tudom'
			],
			varname: 'q8'
		},
		{
			question: "9. Ön szerint az utazási irodák által szervezett utazások vagy a saját maga által megszervezett utazás biztonságosabb?",
			type: 'radio',
			choice: [
				'Az utazási irodák által szervezettek, hiszen nekik mindig naprakész, pontos információik vannak és oda tudnak figyelni az utazók biztonságára',
				'A saját magunk által szervezettek, hiszen mindennek utána tudunk nézni, jobban odafigyelünk a saját biztonságunkra',
				'Nem tudom'
			],
			varname: 'q9'
		},
		{
			question: "10. Ha egyéni utazása során lehetne választani közlekedési eszközt 1500 km-en belül hogyan utazna?",
			type: 'radio',
			choice: [
				'Gépkocsival',
				'Autóbusszal',
				'Repülőgéppel',
				'Nekem mindegy, csak utazzak el',
				'Inkább most nem utazok'
			],
			varname: 'q10'
		},
		{
			question: "11. Mennyire tartja fontosnak az alábbiakat egy turisztikai szolgáltatónál (szálláshely, vendéglátóhely…)?",
			type: 'select',
			choice: [
				{
					label: ' ',
					question: "Csak a beoltottakat fogadja:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_11_beoltott'
				},
				{
					label: ' ',
					question: "Csak negatív teszttel rendelkező vendégeket fogadjon:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_11_negativ_teszt'
				},
				{
					label: ' ',
					question: "Legyenek kihelyezve kézfertőtlenítők:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_11_kezfertotlenitok'
				},
				{
					label: ' ',
					question: "Ne legyen zsúfolt (csak meghatározott kapacitáskihasználtsággal működjön):",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_11_ne_legyen_zsufolt'
				},
				{
					label: ' ',
					question: "A munkatársak mindig viseljenek maszkot:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_11_munkatarsak_maszk'
				},
				{
					label: ' ',
					question: "Fokozott ellenőrzések legyenek a szállodán belül:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_11_ellenorzes'
				},
			],
			varname: 'q11'
		},
		{
			question: "12. Mennyire fontosak Önnek az alábbiak az utazásokkal kapcsolatban?",
			type: 'select',
			choice: [
				{
					label: ' ',
					question: "Az utazásra fordított összeg (ár):",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_12_ar'
				},
				{
					label: ' ',
					question: "Legyen egyedi, különleges, emlékezetes az utazás:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_12_emlekr'
				},
				{
					label: ' ',
					question: "Legyen biztonságos:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_12_biztonsag'
				},
				{
					label: ' ',
					question: "Ingyenes lemondás:",
					type: 'select',
					choice: ['Nagyon fontos', 'Inkabb fontos', 'Egyáltalán nem fontos'],
					varname: 'answer_12_ingyenLemondas'
				},
			],
			varname: 'q12'
		},
		{
			question: "13. Ön mennyire tartja fontosnak, hogy ebben az időszakban az utazási irodák nagyobb hangsúlyt kapjanak a médiában?",
			type: 'radio',
			choice: [
				'Fontos, mert keveset hallok róla',
				'Nem érdekel'
			],
			varname: 'q13'
		},

		{
			question: "14. Kérem, sorolja fel azt a 3 fogalmat, amit Ön elvár egy utazási irodától:",
			type: 'text',
			choice: [
				{
					label: '',
					question: "",
					type: 'text',
					choice: [],
					varname: 'egyeb_14_a'
				},
				{
					label: '',
					question: "",
					type: 'text',
					choice: [],
					varname: 'egyeb_14_b'
				},
				{
					label: '',
					question: "",
					type: 'text',
					choice: [],
					varname: 'egyeb_14_c'
				}
			],
			varname: 'q14'
		},

	]
	let questions = document.querySelector("div#questions");
	let answers = document.getElementById("answers");
	data.forEach(item => {
		questions.innerHTML = item.question;
		answers.innerHTML = "";
		let answ = "";
		for (const chItem in item.choice) {
			console.log(item.varname, "item.cpice=", item.choice, "item.chice[chItem] =", item.choice[chItem]);
			let ch = `['${chItem}']`
			let inputTmpl = `
			<input type="${item.type}" name="${item.varname + ch + '[' + chItem + ']'}">${item.choice[chItem]} </br>
		`
			let selectTmpl = `
			<option value="${chItem}">${item.choice[chItem]}</option>
			`
			if (item.type === "select")
				answ += selectTmpl
			else (answ += inputTmpl)
		}
		if (item.type === "select")
			answ = `<select name="${item.varname}">` + answ + "</select>"
		else (answ = answ)

		answers.insertAdjacentHTML("beforeend", answ)
		form.insertAdjacentHTML("beforeend", document.getElementById("tmpl").outerHTML);
	})
	let tdiv = document.getElementById("tmpl");
	tdiv.innerHTML = "";
	tdiv.style.display = "none";

	function stats() {
		let stats = document.getElementById("stats");
		let tdata = "";
		const getHeaders = (data) => {
			let th1 = "";
			let th2 = "";
			data.forEach(item => {
				th1 += `<th colspan="${item.choice.length}">${item.question}</th>`
				for (const chItem of item.choice) {
					th2 += `<th>${chItem}</th>`
				}
			})
			th2 = "<tr>" + th2 + "</tr>";
			th1 = "<tr>" + th1 + "</tr>";
			return th1 + th2
		}
		tdata = getHeaders(data)
		stats.insertAdjacentHTML("beforeend", tdata);
	}
	stats();
	document.getElementById("btn_data").addEventListener("click",
		(ev) => {
			document.getElementById("data").style.display = "block";
			document.getElementById("autoform").style.display = "none";
		})
	document.getElementById("btn_stats").addEventListener("click",
		(ev) => {
			document.getElementById("data").style.display = "none";
			document.getElementById("autoform").style.display = "block";
		})

}
window.addEventListener("load", pageLoad)