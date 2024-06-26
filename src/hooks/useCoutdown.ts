import { useEffect, useState } from 'react';

const useCountdown = (targetDate: string) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		if (countDown < 0) {
			clearInterval(interval);
			setCountDown(0);
		}

		return () => clearInterval(interval);
	}, [countDownDate, countDown]);

	return countDown < 0 ? ['00', '00', '00'] : getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
	// calculate time left
	// const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours =
		Math.floor(countDown / (1000 * 60 * 60)) < 10
			? '0' + Math.floor(countDown / (1000 * 60 * 60))
			: Math.floor(countDown / (1000 * 60 * 60)).toString();
	const minutes =
		Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)) < 10
			? '0' + Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
			: Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)).toString();
	const seconds =
		Math.floor((countDown % (1000 * 60)) / 1000) < 10
			? '0' + Math.floor((countDown % (1000 * 60)) / 1000)
			: Math.floor((countDown % (1000 * 60)) / 1000).toString();

	return [hours, minutes, seconds];
};

export { useCountdown };
