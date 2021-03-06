import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
           { create: async () => {} },
           { sendMail: async () => {}}
        )

        await expect(submitFeedback.execute ({
            type:'BUG',
            comment:'example comment',
            screenshot: 'data:image/png;base64.sajdadad',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    });
});