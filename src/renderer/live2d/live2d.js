async function createModel(store, view) {

    store.model = await PIXI.live2d.Live2DModel.from(store.role[0].model)
    
    const app = new PIXI.Application({
        view: view,
        autoStart: true,
        resizeTo: window,
        backgroundAlpha: 0
    })

    app.stage.addChild(store.model)

    store.model.y = 50
    store.model.scale.set(store.role[0].scale)

    return app
}
