export function ScheduleParser(s: any) {
	const outArr = s.map((elem: any) => {
		return {
            color:  elem.fields.color.stringValue,
			location: elem.fields.location.stringValue,
			title: elem.fields.title.stringValue,
			time: elem.fields.time.stringValue,
		};
	});

    return outArr;
}
