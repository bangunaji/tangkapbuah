const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.System.Exps.originalviewportwidth,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Keranjang: 0},
	{Touch: 0},
	{Bullet: 0},
	{manggah: 0},
	{skor: 0},
	{bom: 0},
	{nyawa: 0},
	{gameover: 0},
	{over: 0},
	{ulangi: 0},
	{texttombolulangi: 0}
];

self.InstanceType = {
	Keranjang: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	manggah: class extends self.ISpriteInstance {},
	skor: class extends self.ITextInstance {},
	bom: class extends self.ISpriteInstance {},
	nyawa: class extends self.ITextInstance {},
	gameover: class extends self.ISpriteInstance {},
	over: class extends self.ITextInstance {},
	ulangi: class extends self.ISpriteInstance {},
	texttombolulangi: class extends self.ITextInstance {}
}