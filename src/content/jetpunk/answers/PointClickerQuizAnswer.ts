import Answer from './Answer';

export default interface PointClickerQuizAnswer extends Answer {
	points: number;
	display: string;
	explanation: string;
}
