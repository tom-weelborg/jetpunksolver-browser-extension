import PointClickerQuizAnswer from '../answers/PointClickerQuizAnswer';
import DefaultPageVar from './DefaultPageVar';

export default interface PointClickerQuizPageVar extends DefaultPageVar<PointClickerQuizAnswer> {
	data: {
		quiz: {
			numClicks: number;
			answers: PointClickerQuizAnswer[];
		};
	};
}
