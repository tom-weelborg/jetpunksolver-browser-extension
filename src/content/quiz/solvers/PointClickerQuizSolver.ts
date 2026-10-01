import PointClickerQuizAnswer from '../../jetpunk/answers/PointClickerQuizAnswer';
import JetPunkConfig from '../../jetpunk/JetPunkConfig';
import PointClickerQuizPageVar from '../../jetpunk/page-var/PointClickerQuizPageVar';
import { PageType } from '../../jetpunk/PageType';
import { register } from '../quizSolverRegistry';
import { DefaultQuizSolver } from './DefaultQuizSolver';

export class PointClickerQuizSolver extends DefaultQuizSolver<
	PointClickerQuizAnswer,
	PointClickerQuizPageVar
> {
	protected override getQuestions(): PointClickerQuizAnswer[] {
		return super
			.getQuestions()
			.sort((a, b) => b.points - a.points)
			.slice(0, this.documentFacade.getPageVar().data.quiz.numClicks);
	}

	protected getNextQuestion(index: number): string {
		return this.answers[index].id;
	}

	protected getAnswers(question: string): string[] {
		return [this.getAnswer(question)];
	}

	private getAnswer(question: string): string {
		return (
			JetPunkConfig.pointClickerQuizAnswerSelectorPrefix +
			question +
			JetPunkConfig.pointClickerQuizAnswerSelectorSuffix
		);
	}

	protected enterAnswer(answer: string): void {
		this.documentFacade.clickElement(answer);
	}

	protected isQuestionSolved(
		questionIndex: number,
		question: string,
		answers: string[]
	): boolean {
		return this.documentFacade.doesElementExist(
			this.getAnswer(question) + JetPunkConfig.pointClickerQuizAnswerChosen
		);
	}
}

register(PageType.POINT_CLICKER_GAME, PointClickerQuizSolver);
