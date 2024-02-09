import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
 
	let disposable = vscode.commands.registerCommand('kyomu-vscode.kyomu', async () => {
		
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

		const inputPrompts = [
			"どれくらい虚無を味わいたい？秒数で教えて。リアル脱出ゲームじゃないよ。",
			"虚無への旅行時間を秒で指定して。行きすぎ注意！戻ってこれなくなるかも。",
			"虚無の深淵をどれだけ覗きたい？秒で答えて。深すぎると出てこれないからね。",
			"今日の虚無体験の長さは？秒で入力してね。永遠は受け付けてないよ。",
			"虚無の世界へのチケット、いくら時間が必要？秒で教えてよ。時間切れで自動帰還だけど。",
			"虚無の滞在時間を教えて。秒でOK。あ、持ち物は何もいらないよ。そもそも虚無だから。",
			"どれだけの時間、存在を忘れたい？秒で入力してみ。でも、忘れすぎ注意だよ。"
		];

		// ユーザーに持続時間を入力してもらう
        const input = await vscode.window.showInputBox({
            prompt: inputPrompts[Math.floor(Math.random() * inputPrompts.length)],
            placeHolder: "例: 3"
        });

		const duration = parseInt(input || '0', 10) * 1000;
        if (isNaN(duration) || duration <= 0) {
            vscode.window.showErrorMessage("有効な数値を入力してください。");
            return;
        }
        const range = new vscode.Range(
            0,
            0,
            editor.document.lineCount - 1,
            editor.document.lineAt(editor.document.lineCount - 1).text.length
        );
        const voidDecoration = vscode.window.createTextEditorDecorationType({
            color: '#00000000'
        });
        editor.setDecorations(voidDecoration, [range]);
        setTimeout(() => {
			const messages = [
				"虚無の中で、コードの意味を見つけたかい？",
				"おかえり、虚無からの帰還者よ。実は何も変わっていない。",
				"虚無を感じた後は、リフレッシュされた？それともただの空虚？",
				"虚無もほどほどにね。現実世界も悪くないよ。",
				"宇宙の果てを見た気分はどう？また行く？",
				"虚無からの脱出成功！...でも、なんの成果もないよ。",
				"コードを書くのも良いけど、たまには虚無に浸るのもね。",
				"虚無のセッションが終了したよ。結局、バグはそこに残ってるけど。",
				"ふう、虚無から帰ってきたね。コーヒーでもどう？",
				"虚無中にコーディングの答えを見つけた？それとも、ただの幻？",
				"虚無旅行から戻った勇者に、1000行のコードを授けよう。",
				"ああ、虚無からの帰還。次は、もう少し役に立つ旅をしようか。",
				"虚無...それはプログラマーの最も親しい友。また会おう。",
				"虚無体験、星5つ！レビューを書いてね。",
				"この虚無、ちょっと癖になるかも。依存はダメだよ。",
				"虚無から学んだことは？「存在しないものについて考えるな」ということかな？",
				"おしまい"
			];
            voidDecoration.dispose();
			vscode.window.showInformationMessage(messages[Math.floor(Math.random() * messages.length)]);
        }, duration);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
