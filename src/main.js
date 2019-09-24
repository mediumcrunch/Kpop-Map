import kdata from './kpop-data.json';

// const loopNestedObj = obj => {
// 	Object.entries(obj).forEach(([key, val]) => {
// 		if (val && typeof val === 'object') {
// 			console.log(key);
// 			loopNestedObj(val);
// 		} else {
// 			console.log(key, val); // or do something with key and val.
// 		}
// 	});
// };

// loopNestedObj(kdata);

const kmap = L.map('kmap').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(kmap);

Object.entries(kdata).forEach(groups => {
	if (groups && typeof groups === 'object') {
		groups.forEach(group => {
			if (group && typeof group === 'object') {
				for (const member in group) {
					if (group.hasOwnProperty(member)) {
						let memberData = group[member];

						if (memberData.lat && memberData.lon) {
							console.log(member);

							L.marker([memberData.lat, memberData.lon])
								.addTo(kmap)
								.bindPopup(member.toString());
							// .openPopup();
						}
					}
				}
				// 	group.forEach(member => {
				// 		console.log(member);
				// 	});
			}
		});
	}
});
