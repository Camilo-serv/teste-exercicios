(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgDAAIgBgBIgBgCIgLgeIgFgKQgCgEgDgDQgDgDgEgCQgDgBgGAAIgLAAIAAA2IgBABIgBABIgDAAIgEAAIgEAAIgDAAIgBgBIAAgBIAAh0QAAgFACgBIAEgBIAbAAIAIAAIAEAAQAIABAFAEQAGACAEAEQADAEACAGQACAFAAAHQAAAHgBAEQgCAFgDAEIgIAHIgKADIAGAEIAFAFIADAHIAFAJIALAcIABAFIABACIAAABIgCABIgCAAIgFAAgAgYgGIAQAAQAGAAAFgCQAEgBAEgDQADgDABgEQACgEAAgEQAAgIgEgFQgDgFgHgCIgFgBIgIAAIgOAAg");
	this.shape.setTransform(132.3,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA9QgKgFgHgIQgHgIgDgMQgEgMABgQQAAgNADgNQAEgMAHgIQAHgJALgFQALgEANAAQAPAAAKAEQAKAEAHAJQAHAHADAMQADAMAAAQQABAOgEAMQgEAMgGAJQgIAIgLAGQgKAEgOAAQgPAAgKgEgAgRguQgHAFgFAGQgEAHgDAJQgBAJAAAKQAAALABAJQACAJAFAHQAEAHAIADQAHAFAKAAQALAAAHgFQAIgEAEgHQAFgHACgJQACgJAAgKQAAgKgCgJQgCgJgFgIQgEgGgHgEQgIgEgLAAQgKAAgHAEg");
	this.shape_1.setTransform(119.8,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_2.setTransform(110.6,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgCAAIgCgBIgBgCIgLgeIgFgKQgCgEgDgDQgDgDgEgCQgDgBgGAAIgLAAIAAA2IgBABIgBABIgDAAIgEAAIgEAAIgDAAIgBgBIAAgBIAAh0QAAgFACgBIAEgBIAbAAIAIAAIAEAAQAIABAGAEQAFACAEAEQADAEACAGQACAFAAAHQAAAHgBAEQgCAFgDAEIgIAHIgKADIAGAEIAFAFIADAHIAFAJIALAcIABAFIABACIAAABIgCABIgCAAIgFAAgAgYgGIAQAAQAHAAAEgCQAFgBADgDQADgDABgEQACgEAAgEQAAgIgEgFQgDgFgHgCIgFgBIgIAAIgOAAg");
	this.shape_3.setTransform(103.2,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIABAEIgBACIgBACIgBABIgBAAIgqAAIAAAtIAxAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_4.setTransform(92.7,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgBIAAhtIgkAAIgBAAIgBgCIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBACIgBAAIgkAAIAABtIAAABIgBABIgDAAIgEAAg");
	this.shape_5.setTransform(82.6,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjA/IgFAAIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgBIAAh0QAAgEACgCQACgCADABIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDAAg");
	this.shape_6.setTransform(71.3,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgLgfIgzAAIgLAeIAAACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIAEgBIAEAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_7.setTransform(59.1,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA9QgKgFgHgIQgGgIgEgMQgDgMAAgQQAAgNADgNQAEgMAHgIQAHgJALgFQALgEANAAQAOAAALAEQAKAEAHAJQAHAHAEAMQACAMAAAQQAAAOgDAMQgEAMgGAJQgIAIgLAGQgLAEgNAAQgOAAgLgEgAgRguQgHAFgFAGQgEAHgCAJQgCAJAAAKQAAALACAJQABAJAEAHQAFAHAIADQAGAFALAAQALAAAIgFQAHgEAEgHQAFgHACgJQACgJAAgKQAAgKgCgJQgCgJgFgIQgEgGgHgEQgHgEgLAAQgKAAgIAEg");
	this.shape_8.setTransform(42.2,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_9.setTransform(30.4,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_10.setTransform(22.4,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeA/IgEAAIgCAAIgCgBIAAgBIAAh0QAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAbAAIAHAAIAJABQAFABAFAEQAFADAEAEQAEAEACAHQACAGAAAGQAAAKgDAIQgEAIgFADQgGAGgJADQgIADgLAAIgOAAIAAAuIgBABIgBABIgCAAIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgDACgGQACgFAAgFQAAgHgDgGQgDgFgEgDIgJgDIgIAAIgPAAg");
	this.shape_11.setTransform(15.1,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZBPQgKgEgHgIQgHgIgDgMQgDgNAAgPQAAgPADgLQAEgNAHgIQAIgIAKgFQALgFANAAQAOAAALAFQAKADAHAJQAHAIADALQADAMAAAPQAAAPgDAMQgEANgGAJQgIAIgLAFQgKAEgOABQgPgBgKgEgAgRgcQgHAFgFAHQgFAHgCAIQgBAJAAAKQAAALABAKQACAIAFAIQAEAGAHAEQAIAEAKAAQALAAAHgEQAIgFAFgHQAEgHACgIQACgJAAgLQAAgLgCgIQgCgJgEgHQgFgGgHgFQgIgDgLAAQgKAAgHADgAgGg2IgCgBIAAgBIABgCIARgUIADgDIACgBIADAAIAEgBIAEABIADABIAAACIgBACIgWAUIgBACIgDAAIgCABIgCAAIgEAAg");
	this.shape_12.setTransform(2.9,9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgBIAAhtIgkAAIgBAAIgBgCIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBACIgBAAIgkAAIAABtIAAABIgBABIgDAAIgEAAg");
	this.shape_13.setTransform(-8.6,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-20,-3,159.5,28.4), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgGgIgEgMQgEgMAAgQQABgNAEgNQADgMAHgIQAHgJALgFQALgEAOAAQANAAALAEQAKAEAHAJQAHAHAEAMQACAMAAAQQAAAOgDAMQgDAMgIAJQgHAIgLAGQgLAEgNAAQgOAAgKgEgAgRguQgHAFgFAGQgEAHgCAJQgCAJgBAKQABALACAJQABAJAEAHQAFAHAIADQAGAFALAAQALAAAIgFQAHgEAEgHQAFgHACgJQACgJAAgKQAAgKgCgJQgCgJgFgIQgEgGgHgEQgHgEgLAAQgKAAgIAEg");
	this.shape.setTransform(104.2,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_1.setTransform(95,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA/IgFgBQgCgCABgEIAAhvQgBgEACgCIAFgBIAcAAQAQAAALAEQALAEAIAIQAHAIAEAMQAFALAAAOQAAAQgFAMQgEAMgIAIQgIAIgMAEQgMAEgOAAgAgfAxIASAAQAMAAAHgDQAIgDAGgGQAFgGADgKQADgJAAgMQAAgKgCgJQgEgJgEgGQgGgHgJgEQgGgDgOAAIgRAAg");
	this.shape_2.setTransform(86.8,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA9QgJgCgGgHQgGgGgDgIQgEgKAAgLIAAhNIABgBIABgBIADgBIAEgBIAEABIACABIACABIAAABIAABLQAAAJACAGQACAHAEAEQAEAFAGACQAGACAGAAQAHAAAGgCQAGgCAEgFQAEgEACgGQACgGAAgJIAAhMIAAgBIACgBIACgBIAEgBIAEABIADABIABABIABABIAABMQAAAMgEAJQgDAIgGAGQgHAHgJADQgJADgKABQgLAAgIgEg");
	this.shape_3.setTransform(73.8,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAuBTIgEAAIgEgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IAAAEIAAACIgDABIgFAAgAgWAkIArAAIgVg+gAgGg1IgBgBIgBgBIABgCIASgVIACgCIACgBIADAAIAEgBIAFABIACABIABABIgCACIgVAVIgDACIgCAAIgCABIgCAAIgEAAg");
	this.shape_4.setTransform(61.6,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgDAAIgBgBIgBgCIgLgeIgFgKQgCgEgDgDQgDgDgEgCQgDgBgGAAIgLAAIAAA2IgBABIgBABIgDAAIgEAAIgEAAIgDAAIgBgBIAAgBIAAh0QAAgFACgBIAEgBIAbAAIAIAAIAEAAQAIABAFAEQAGACAEAEQADAEACAGQACAFAAAHQAAAHgBAEQgCAFgDAEIgIAHIgKADIAGAEIAFAFIADAHIAFAJIALAcIABAFIABACIAAABIgCABIgCAAIgFAAgAgYgGIAQAAQAGAAAFgCQAEgBAEgDQADgDABgEQACgEAAgEQAAgIgDgFQgEgFgHgCIgFgBIgIAAIgOAAg");
	this.shape_5.setTransform(46.4,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIADgBIAFAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_6.setTransform(34.7,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBAIgFAAIgCgBIgCgBIgBgBIgcgyIgcAyIgBABIgBABIgDABIgFAAIgFAAIgCgBIgBgCIACgEIAig5Ighg4IgBgDQgBgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIADgBIAFAAIAFAAIADABIACABIABABIAaAwIAbgwIABgBIABgBIADgBIAEAAIAFABIADAAIABADIgCADIghA4IAjA5IABAEIgBACIgCABIgGAAg");
	this.shape_7.setTransform(23.7,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_8.setTransform(16,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIADgBIAFAAIAFAAIADABIACABIABACIArB0IAAAEIAAACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_9.setTransform(7.7,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA/IgFgBQgBgCAAgEIAAhvQAAgEABgCIAFgBIAdAAQAKAAAHACQAHACAFAEQAEAEADAGQADAGgBAIIgBAIIgCAIIgGAGIgHAFQAFABAEACQAFACADAEQAEAEACAFQABAGAAAGQABAGgCAFIgEAJIgGAHIgJAFIgKADIgNABgAgYAxIAYAAIAKgBIAHgEIAFgHQACgEAAgFQAAgGgCgEQgCgEgDgDQgEgDgFgCQgFgBgHAAIgUAAgAgYgIIATAAQAGAAADgBQAEgCADgDQADgDABgEQABgDAAgFQAAgEgBgEQgBgEgDgCQgCgDgFgBIgKgBIgSAAg");
	this.shape_10.setTransform(-3.1,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-11,-3,124,28.4), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIABADIgBADIgBACIgBABIgBABIgwAAIAAAnIApAAIACABIABABIAAACIABAEIgBACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape.setTransform(72.2,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA/IgDgBQgCgCAAgEIAAhvQAAgEACgCIADgBIAdAAQAPAAAMAEQALAEAIAIQAIAIADAMQAEALAAAOQAAAQgEAMQgEAMgIAIQgIAIgMAEQgLAEgQAAgAgfAxIARAAQANAAAHgDQAIgDAFgGQAGgGADgKQADgJAAgMQAAgKgDgJQgCgJgGgGQgFgHgIgEQgIgDgNAAIgRAAg");
	this.shape_1.setTransform(61.3,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgGgIgEgMQgDgMgBgQQAAgNAFgNQADgMAHgIQAHgJALgFQALgEAOAAQAOAAAKAEQAKAEAHAJQAHAHADAMQAEAMAAAQQAAAOgEAMQgDAMgIAJQgHAIgLAGQgKAEgOAAQgPAAgJgEgAgRguQgIAFgEAGQgFAHgCAJQgCAJAAAKQAAALACAJQACAJAFAHQAEAHAHADQAIAFAKAAQALAAAHgFQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgJQgCgJgEgIQgFgGgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_2.setTransform(48.1,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_3.setTransform(36.3,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgCAAIgCgBIgBgCIgMgeIgEgKQgCgEgDgDQgDgDgEgCQgEgBgFAAIgLAAIAAA2IgBABIgBABIgDAAIgEAAIgEAAIgDAAIgBgBIAAgBIAAh0QAAgFACgBIAEgBIAbAAIAIAAIAEAAQAIABAGAEQAFACAEAEQADAEACAGQACAFABAHQAAAHgCAEQgCAFgDAEIgIAHIgKADIAGAEIAEAFIAEAHIAFAJIALAcIABAFIABACIAAABIgCABIgCAAIgFAAgAgYgGIAQAAQAHAAAEgCQAEgBAEgDQADgDABgEQACgEAAgEQAAgIgEgFQgDgFgHgCIgFgBIgIAAIgOAAg");
	this.shape_4.setTransform(21.4,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA9BJIgGgBIgKgFIgMgHIgNgLQgEADgIACQgHADgJAAQgOAAgKgFQgLgEgHgIQgGgIgEgMQgDgMAAgPQAAgPAEgMQADgMAHgJQAIgIAKgFQALgEAPAAQAMAAALAEQAKAEAHAIQAHAIADAMQAEAMAAAPIgBAOIgDAOIgFAMIgHAKIAMAJIAJAFIAGACIADACIABACIAAAFIAAAEIgBACIgBABIgBAAgAgZg2QgHAEgFAHQgEAHgCAJQgCAJAAAKQAAAKACAKQABAJAFAHQAEAHAIADQAHAEALAAQAKAAAIgEQAHgEAFgHQAEgHACgJQACgKAAgJQAAgLgCgJQgCgJgEgHQgEgGgIgEQgHgEgKAAQgLAAgIAEg");
	this.shape_5.setTransform(9.4,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,-3,79,28.4), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgHgIgDgMQgEgMAAgQQAAgNAFgNQADgMAHgIQAIgJAKgFQALgEAOAAQANAAALAEQAKAEAHAJQAHAHAEAMQADAMAAAQQgBAOgDAMQgDAMgIAJQgHAIgLAGQgLAEgNAAQgOAAgKgEgAgRguQgHAFgFAGQgFAHgBAJQgDAJAAAKQAAALADAJQABAJAEAHQAFAHAIADQAGAFALAAQALAAAIgFQAHgEAEgHQAFgHACgJQACgJAAgKQAAgKgCgJQgCgJgFgIQgEgGgHgEQgIgEgKAAQgKAAgIAEg");
	this.shape.setTransform(42,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeA/IgEAAIgCAAIgCgBIAAgBIAAh0QAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAbAAIAHAAIAJABQAFABAFAEQAFADAEAEQAEAEACAHQACAGAAAGQAAAKgDAIQgEAIgFADQgGAGgJADQgIADgLAAIgOAAIAAAuIgBABIgBABIgCAAIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgDACgGQACgFAAgFQAAgHgDgGQgDgFgEgDIgJgDIgIAAIgPAAg");
	this.shape_1.setTransform(30.6,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgGgIgEgMQgDgMgBgQQAAgNAFgNQADgMAHgIQAHgJALgFQALgEAOAAQAOAAAKAEQAKAEAHAJQAHAHADAMQAEAMAAAQQAAAOgEAMQgDAMgIAJQgHAIgLAGQgKAEgOAAQgPAAgJgEgAgRguQgIAFgEAGQgFAHgCAJQgCAJAAAKQAAALACAJQACAJAFAHQAEAHAHADQAIAFAKAAQALAAAHgFQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgJQgCgJgEgIQgFgGgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_2.setTransform(18.4,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgBIAAhtIgkAAIgBAAIgBgCIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBACIgBAAIgkAAIAABtIAAABIgBABIgDAAIgEAAg");
	this.shape_3.setTransform(6.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,-3,50.8,28.4), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABhAAQAAAogdAcQgcAdgoAAQgnAAgdgdQgcgcAAgoQAAgnAcgdQAdgcAnAAQAoAAAcAcQAdAdAAAng");
	this.shape.setTransform(9.7,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-2.5,-2.5,24.3,24.3), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AgeAjIg4BBIAAj6ICtClIhJAAIAwB1IgjASg");
	this.shape.setTransform(8.7,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,17.4,30.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BEA857").ss(1,1,1).p("AmFqCIKsBqQA3AXgGA2IAAItQA5ATAEA0IAAEyQgEAmg5gJQABApgjgEInliAAmFqCIDQC0QAoAfgDBFIAAH7QADATgiAjIAADWIAADUQgFAhgZgcIjHkcIAAvWQAHgHAIABg");
	this.shape.setTransform(40.5,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67B1FF").s().p("AgTAgIAAg/IAnACIAAA9g");
	this.shape_1.setTransform(76.9,106.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFEED").s().p("AgTBsIAAjZIAnAAIAADbg");
	this.shape_2.setTransform(76.9,92.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F5DD75","#FDF8AD"],[0,1],11.6,43.7,-7.1,-26.8).s().p("ABFJ2IjGkcIAAvWQAGgHAIABIDQC0QAoAfgDBFIAAH7QADATgjAjIAADWIAADUQgCASgJAAQgHAAgLgNg");
	this.shape_3.setTransform(13,64.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B49E52","#F5DD75"],[0,1],-39.7,0,33.7,0).s().p("AEuJQInkiAIAAjWQAigjgDgTIAAn7QADhFgogfIjQi0IKsBqQA3AXgGA2IAAItQA5ATADA0IAAEyQgDAmg5gJQABAlgeAAIgGAAgAFRG1IAABAIAoAAIAAg+IAAjcIgoAAg");
	this.shape_4.setTransform(41.2,59.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,82.9,130.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BEBEBE").s().p("AgWAXIAAgtIAtAAIAAAtg");
	this.shape.setTransform(14.2,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEBEBE").s().p("AgWAXIAAgtIAtAAIAAAtg");
	this.shape_1.setTransform(27.7,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgZAbIAAg0IA0AAIAAA0g");
	this.shape_2.setTransform(14.3,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgZAbIAAg0IA0AAIAAA0g");
	this.shape_3.setTransform(27.8,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABdGsIgbAAIiMAAIgcAAIgyAAQgyAAAAgyIAAt0ADLn6IAAN0QAAAygyAAIg8AAIAAAdQAAAygyAAIhfAAQgyAAAAgyIAAgdABCGsQgDArgiAAIhDAAQgiAAgCgr");
	this.shape_4.setTransform(20.3,77.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(1,1,1).p("Aiah2IAPgNIEYAAIAOANIAADpIAAARAiaCEIAAgTIAAjnIE1AA");
	this.shape_5.setTransform(20.3,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag0IFQgyAAAAgyIAAgeIAcAAIgcAAIgyAAQgyAAAAgyIAAt0QAOgQAigDIAAATIE0AAIAAgRQApgBAIASIAAN0QAAAygyAAIg8AAIgcAAIiLAAQACAsAiAAIBDAAQAiAAACgsIAcAAIAAAeQAAAygyAAgABdG1g");
	this.shape_6.setTransform(20.3,76.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AiaCEIAAgTIAAjnIAPgNIEYAAIAOANIk1AAIE1AAIAADpIAAARgACbh2g");
	this.shape_7.setTransform(20.3,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,42.6,129.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgfA+QgOgMgCgSIAbgCQACAKAFAFQAGAFAHAAQAIAAAGgHQAGgFAAgMQAAgKgGgGQgGgGgHAAQgFAAgHACIADgVQAKAAAGgFQAFgGABgIQgBgHgDgFQgFgDgGAAQgHAAgFAEQgFAFgBAJIgagEQADgNAFgIQAGgHAJgFQAKgEALAAQAUAAAMANQAKAKAAANQAAAUgUALQAMACAHAIQAIAKAAANQAAASgOANQgOAOgUAAQgTAAgMgLg");
	this.shape.setTransform(53.1,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag2BHIAAiOIAvAAQAZABAIACQAMACAJALQAIAMAAAQQAAANgFAKQgFAHgHAFQgHAGgIABQgKACgTAAIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgCQgFgBgPAAIgOAAg");
	this.shape_1.setTransform(41.2,88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAqBHIAAhvIgcBvIgbAAIgchvIAABvIgbAAIAAiOIArAAIAZBhIAahhIArAAIAACOg");
	this.shape_2.setTransform(25.9,88.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D6182").ss(1,1,1).p("AAWDtQghAXgvAAQgvAAghgXQgEgDgDgCQgbgWAAgeQAAgiAigYQAhgXAvAAQAlAAAcAPIAAl1IAYAAIAHAAQAMAqAeAOQCNBIhJCtQgYARgGgaQAyh5hvg0QgCgBgCgBIAAEMIAAAmIAAAgQgGAXgZASg");
	this.shape_3.setTransform(36.4,45.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAgPQABAIAAAHQAAAIgBAIg");
	this.shape_4.setTransform(41.9,63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2894C7").s().p("AiYDtIgGgFIAAgXQBBhWCFADIAAAmIAAAgQgGAXgaASQggAXgvAAQgvAAgigXgABpAhQAyh5hvg0QgLg7gQg8IAIAAQAMAqAeAOQCMBIhICtQgKAHgHAAQgKAAgDgQg");
	this.shape_5.setTransform(37.8,45.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5BB2DC").s().p("AhyDCQAAgiAigXQAhgYAvAAQAkAAAcAPIAAl1IAZAAQAPA8ALA7IgEgCIAAEMQiEgDhCBWIAAAXQgbgWAAgeg");
	this.shape_6.setTransform(30.7,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(1,1,1).p("AmKoMID/AAIFPAAIDHEJIAAMQIoWAAIj/AAg");
	this.shape_7.setTransform(39.5,52.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AhiiEQAmBOgWCUQgCATAYgFQA2gNBqAm");
	this.shape_8.setTransform(69.1,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C5C5C5","#FFFFFF"],[0,1],84.4,160.2,38.6,-10.7).s().p("Ah/INIAAwZID/AAIAAQZg");
	this.shape_9.setTransform(12.8,52.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C5C5C5","#FFFFFF"],[0,1],32.9,160.2,-12.9,-10.7).s().p("AkKINIAAwZIFOAAQAmBOgVCUQgCATAXgFQA3gMBqAlIAAMQg");
	this.shape_10.setTransform(52.3,52.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BsIAAgPIgVAAQAUiTglhOIDGEIQhqglg2ANg");
	this.shape_11.setTransform(69.1,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,81,107), null);


(lib.seta_bt_padrao2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBFIAhhFIghhEIAAgjIAAAAIAuBfIAAASIguBegAgpBFIAihFIgihEIAAgjIAAAAIAuBfIAAASIguBeg");
	this.shape.setTransform(4.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seta_bt_padrao2, new cjs.Rectangle(0,0,8.5,20.9), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAespIhLAAIAAhLIBLAAgAPYuVIBxAAIAEXEIAAAWIEHDqIAAAbIAAAtIgfAfMgpYAAAIgwgwIAAgcIAAgbIEAjqIAAgWIAA3EIBqAAIAACEIfBAAIAATsIAABUIAAAWAPYuVIAACEAo2JFIA3AAIBCAAIBCAAIA+AAAoWJtIAAAoIAXAAIAsAAIAAgoIgsAAIgXAAIggAAIggAAIAAAoIAgAAIAgAAAo2LJIA3AAIAAg0Ao2LJIAAg0AnTKVIAWAAIAhAAIAAgoIghAAIgWAAAm9LJIAAg0Ao2JFIAAAoAn/JFIAAAoAm9JtIAAgoAn/LJIBCAAAq5JFIA+AAIBFAAAsGLJIAGg0IgiAAIgeAAIgMA0IBGAAIBNAAIAAg0IAhAAIAAgoIghAAIggAAAsAKVIAjAAIAEgoIgjAAIgdAAIgJAoAp7LJIAAg0IgdAAAq5LJIA+AAIBFAAAqYJtIAdAAIAAgoAr4JFIA/AAIAAAoArdKVIAkAAAr8JtIAEgoAp7KVIAlAAApWJtIglAAAhHJFIA9AAIA/AAAifJtIAVAAIAAgoIBDAAIAAAoIAoAAIAVAAIAAgoAifKVIAAgoIgtAAIgSAAIAAAoIA/AAIA7AAAhHJtIgdAAIAAAoIBFAAIAAgoAiKJtIAmAAAkGJFIA6AAIAAAoAlYKVIAAgoIgjAAIAAgoAlYJtIAbAAIAAgoIA3AAAkaKVIA8AAAkaJtIAAAoAkGJtIgUAAAjeJtIgoAAIAAgoAlYKVIA+AAAk9JtIAjAAAiDNxQAAgGAEgFQAFgEAGAAQAGAAAEAEQAEAFAAAGQAAAGgEAEQgEAEgGAAQgGAAgFgEQgEgEAAgGgAgLN7QgEgEAAgGQAAgGAEgFQAFgEAGAAQAFAAAEAEQAFAFAAAGQAAAGgFAEQgEAEgFAAQgGAAgFgEgAjMJFIBCAAAjzLdIH8AAIAAA8IoNAAgAmcKVIBEAAAl7JtIghAAAt0JFIBGAAIA2AAAvpJFIAzAAIBCAAAvpHbIAABUIAAAWAujJtIgkAAIg0AAIgcAoIgjAAAu1KVIASgoAvZKVIAkAAAvwLJIAXg0Ig+AAAvwLJIBYAAIAOg0IgrAAAs3JtIgnAAIgLAoIApAAAteJtIghAAIgkAAAuKKVIAhAAAu2JFIgRAoAt/JtIALgoAs3JtIAJgoAuYLJIBMAAAxTJFIATAAIA+AAIAZAAAxpJtIgoAoIBXAAIgkA0IBuAAAv7JtIgjAAIhLAAAweJtIAcgoAxAJFIgpAoAyRKVIg1A0IBoAAAsZJtIgeAAAQ8JFIAJAJIAcAdIAqAqIAzA0IhOAAIhNAAIgUg0IA+AAIAVAAIgcgoIAbgCAQ8JFIARAAAQ8JFIgmAAIAbAoIAVAAAQxJtIgyAAIgQAAIAMAoIAUAAASLKVIgpAAARNKVIAjA0AOuJFIAqAAIAXAAIAnAAAMuJFIA+AAIBCAAAOAKVIgUAAIgHgoIARAAIgKgoAONLJIgNg0IA0AAAONLJIhGAAIhJAAIgHg0AM2JtIAvAAAM9KVIAKA0ANsKVIgvAAAPvJtIg0AAIgRAAIAKAoIATAAIA0AAAPYLJIgRg0APYLJIhLAAAMuJFIAIAoIgaAAAO7JtIgNgoAN2JtIA0AAAQjLJIhLAAAP/JtIgQgoADnJFIA4AAIBGAAIBDAAIBCAAIBHAAIAAAoIArAAIAAAoIAZAAIAgAAIAAgoIggAAIAAgoIA8AAIA7AAIBCAAAEfJtIgSAAIAAAoIASAAIAyAAIAAgoIgyAAIAAgoADaKVIANAAIAmAAADnJtIgNAAIAAAoAENJtIgmAAIAAgoAEfLJIAAg0ADnLJIAAg0AEfLJIg4AAIqkAAAFRKVIAUAAIAvAAIAAgoIgvAAIgUAAAFlLJIAAg0AFlLJIhGAAAFlJtIAAgoACAJFIAwAAIA3AAABhKVIAAgoIAfAAIAAgoAAhKVIAAgoIAUAAIAsAAAAhKVIBAAAIBEAAIAAgoIALAAIAAgoAClJtIglAAAA1JtIAAgoIBLAAABpNxQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgGgAJRNKIAAAeIjYAAIAAgeI7MAAAClKVIA1AAACwJtIAqAAAK8LJIhHAAIAAg0AK1JtIggAAAK4KVIAEA0AKVKVIAjAAIAkAAIgDgoIgkAAALcKVIAbAAIArAAIgGgoIgrAAIgYAAAL+LJIhCAAAKxJFIAEAoALxJtIgFgoAHZKVIARAAIAAA0IhCAAIAAg0IAxAAIAAgoIARAAIAAgoAGoJtIAxAAAIxKVIgdAAIAAgoIAdAAAIxLJIAAg0IArAAAIUKVIgqAAAIxLJIhHAAAGoJFIAAAoAHqJtIAqAAAJ1LJIhEAAAIxJFIBEAAAJ1JtIgZAAAGoLJIhDAAAGoKVIgUAAAJRNKIjYAAAGUJtIAUAAAVUNKIsDAAAMiKVIAbAAAvpuVIfBAAAvpHbIAAzsAgfKVIBAAAAAhJtIgrAAAvpHbIfBAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvgJ3IAAzsIfBAAIAATsg");
	this.shape_1.setTransform(-0.9,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626B71").s().p("AkFAeIAQg7IH8AAIAAA7g");
	this.shape_2.setTransform(0.2,76.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah5AWQgEgEAAgGQAAgGAEgEQAFgEAFAAQAHAAADAEQAFAEAAAGQAAAGgFAEQgDAFgHgBQgFABgFgFgAjxAWQgEgEAAgGQAAgGAEgEQAFgEAGAAQAFAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgFgBQgGABgFgFgAllAWQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGgBQgFABgFgFgACTADIAAgcIDXAAIAAAcg");
	this.shape_3.setTransform(23.1,86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8A95").s().p("AJQAOIjXAAI7MAAIAAgaMAqmAAAIAAAag");
	this.shape_4.setTransform(0,82.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292929").s().p("A0jAmIgwgvIAAgcIbMAAIAAAeIDXAAIAAgeIMDAAIAAAsIgeAfgABtgJQgFAFAAAFQAAAGAFAEQAEAEAGAAQAGAAAEgEQAFgEgBgGQABgFgFgFQgEgEgGAAQgGAAgEAEgAgLgJQgDAFAAAFQAAAGADAEQAFAEAGAAQAFAAAEgEQAEgEABgGQgBgFgEgFQgEgEgFAAQgGAAgFAEgAh/gJQgDAFAAAFQAAAGADAEQAFAEAGAAQAGAAAEgEQAEgEAAgGQAAgFgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_5.setTransform(0,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1E20").s().p("AO2ALIhBAAIg+AAIhCAAIg7AAIg8AAIhEAAIhHAAIhCAAIhEAAIhFAAIg5AAIg3AAIgvAAIhLAAIg/AAIg8AAIhEAAIhBAAIg7AAIg3AAIg+AAIhCAAIhCAAIg2AAIhGAAIg+AAIg/AAIg2AAIhGAAIhBAAIg0AAIAAgVIfBAAIAAAVg");
	this.shape_6.setTransform(-0.9,57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C5CA").s().p("A1TB1IEAjpIATAAIgpAoIgoAoIg0AzIBnAAIBuAAIBYAAIBNAAIBFAAIBNAAIA+AAIBGAAIA2AAIBCAAIKjAAIA5AAIBFAAIBEAAIBCAAIBHAAIBEAAIBHAAIBCAAIBJAAIBFAAIBMAAIBKAAIBOAAIBOAAIgzgzIgqgrIgcgcIAIgJIEGDpgAkDBfIIMAAIAAg8In8AAg");
	this.shape_7.setTransform(0,69.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#979AA2").s().p("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");
	this.shape_8.setTransform(-0.4,64.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4C4C6").s().p("AQ/ALIgmAAIgmAAIgYAAIAAgVIB1AAIAAAVgAv+ALIg/AAIgSAAIAAgVIBqAAIAAAVg");
	this.shape_9.setTransform(-0.3,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#010104").s().p("AglAlIAAhJIBLAAIAABJg");
	this.shape_10.setTransform(-0.8,-84.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E3E3E4").s().p("APbLiIAAhUIAAzsIAAiDIByAAIADXDgAxPLiIAA3DIBqAAIAACDIAATsIAABUg");
	this.shape_11.setTransform(-0.3,-17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2F32").s().p("AvgLiIAAhUIfBAAIAABUgAvgpeIAAiDIfBAAIAACDgAgkp2IBLAAIAAhLIhLAAg");
	this.shape_12.setTransform(-0.9,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-137.3,-92.7,274.7,185.5), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().rs(["#FFFFFF","#000000"],[0,1],62,69.9,0,62,69.9,133).ss(1,1,1).p("AAKAtQgHACgCgBQAAAAgBAAQgEgDgCgKQgCgNAAgUQAAgSACgOQADgOANAA");
	this.shape_12.setTransform(-61.9,-69.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1,1,1).p("AJYERIAAz7QAAjFjCAAIm5AAIl0AAQjDAAAADFIAAfWQAADFDDAAIMtAAQDCAAAAjFgAGXzEIANAAQDIAAAADIIAAf5QAADIjIAAItHAAQjIAAAAjIIAA4HIAAiKIAAhcIAAiMIAAhyIAAgOQAAjIDIAAIJ7AAgAAuvTIHjAAIAAPfIAAN9InlAAIhQAAInvAAIAA9cgAjjwEQAIgIALAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgLAIgIg");
	this.shape_13.setTransform(1,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(1,1,1).p("AFMxmQAAgEACgCQABAAAAAAQAGgEAUgCQAagCApAAQAnAAAdACQAbADAAACIAAAHAn3scQgEAAgBgBQAAgBgBAAQgEgEgBgLQgCgQAAgYQAAgYACgRQACgQADAAIAGAAAoAlOQgFgDgCgJQgDgOAAgTQAAgUADgOQADgNADAAIAKAAACcRhIAAgjQAAgUgUAAIgjAAQgUAAAAAUIAAAjQAAAUAUAAIAjAAQAUAAAAgUg");
	this.shape_14.setTransform(-10.6,-8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAnwMIiBAAQgJAAgGgGQgGgGAAgIIAAgBQAAgIAGgGQAGgGAJAAIByAAIBEAAQAJAAAGAGQAGAGAAAIIAAABQAAAIgGAGQgGAGgJAAIg1AAIAEAJAgnNZQgXAJgSASQghAhAAAvQAAAvAhAiQAiAhAuAAQAvAAAighQAhgiAAgvQAAgvghghQgSgSgWgJ");
	this.shape_15.setTransform(1.3,5.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAtOuIhQAAInvAAIAA9cIJBAAIHjAAIAAPfIAAN9g");
	this.shape_16.setTransform(0.8,-2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#280D5D").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAADADQAEAEAAADQAAAFgEADQgDADgEAAQgEAAgDgDg");
	this.shape_17.setTransform(-20,-100.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B2D31").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIgAgHgHQgDAEAAADQAAAFADADQADADAEAAQAEAAADgDQADgDAAgFQAAgDgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_18.setTransform(-19.9,-100.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#5E5E5E","#020200"],[0,1],-11.4,0,11.4,0).s().p("AhQBNQghgiAAguQAAgvAhghQATgSAWgJIBQAAQAWAJARASQAiAhAAAvQAAAugiAiQghAhgvABQgugBgighgAglAKQAAATAUAAIAiAAQAUAAAAgTIAAgiQAAgVgUABIgiAAQgUgBAAAVIAAAigAgRAdQgUAAAAgTIAAgiQAAgVAUABIAiAAQAUgBAAAVIAAAiQAAATgUAAgAAlAKg");
	this.shape_19.setTransform(1.3,102.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#111111"],[0,1],-21.1,-49.5,27.9,59.9).s().p("AmWSwQjCAAAAjEIAA/XQAAjEDCAAIF0AAIA+CpIhyAAQgIAAgGAGQgGAGAAAIIAAABQAAAIAGAGQAGAGAIAAICBAAIAEAJIpBAAIAAdcIHvAAQgWAJgSASQgiAhAAAvQAAAvAiAiQAhAhAuAAQAvAAAighQAhgiAAgvQAAgvghghQgSgSgWgJIHlAAIAAt9IBHEFIAALcQAADEjCAAgAjiwFQgIAIAAALQAAALAIAIQAIAIALAAQALAAAIgIQAIgIAAgLQAAgLgIgIQgIgIgLAAQgLAAgIAIg");
	this.shape_20.setTransform(0.8,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AmjTFQjHAAgBjIIAA4HIAAiKIAAhcIAAiMIAAhyIAAgOQABjIDHAAIJ7AAIC/AAIANAAQDHAAABDIIAAf5QgBDIjHAAgApavqIAAfWQAADFDDAAIMtAAQDCAAAAjFIAArbIAAz7QAAjFjCAAIm6AAIlzAAQjDAAAADFg");
	this.shape_21.setTransform(1,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#000000"],[0,1],251.9,122.8,0,251.9,122.8,0).s().p("AoAGTQgFgDgCgKQgDgNAAgUQAAgTADgOQADgOADAAIAKAAQgCBdgHAAIAAAAgAoACtIAAAAQgFgDgCgKQgDgNAAgUQAAgTADgOQADgOANAAIAABcIgHACIgCgBgAn8g8IgBAAQgEgEgBgMQgCgQAAgYQAAgXACgRQACgQADAAIAGAAIAABxIgFgBgAFMmCIAAgDQAAgEACgBIABgBQAGgEAUgBQAagCApAAQAnAAAdACQAbACAAADIAAAGIAAADg");
	this.shape_22.setTransform(-10.6,-82.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#777777").s().p("AAmAVIiAAAQgJAAgGgGQgGgGAAgJIAAAAQAAgIAGgGQAGgGAJAAIBxAAIBEAAQAJAAAGAGQAGAGAAAIIAAAAQAAAJgGAGQgGAGgJAAg");
	this.shape_23.setTransform(1.3,-100.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#959596","#020200"],[0.004,1],-20.9,-28.1,31,61.8).s().p("AD3HbIAAvfIniAAIgEgJIA1AAQAJAAAGgGQAGgGAAgIIAAgBQAAgIgGgGQgGgGgJAAIhEAAIg/ipIG5AAQDCAAAADEIAAT7g");
	this.shape_24.setTransform(29.1,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(-63.9,-123.8,127.8,247.8), null);


(lib.seta_bt_padrao2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEBFIAhhFIghhEIAAgjIAAAAIAuBfIAAASIguBegAgpBFIAihFIgihEIAAgjIAAAAIAuBfIAAASIguBeg");
	this.shape_1.setTransform(4.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.seta_bt_padrao2_1, new cjs.Rectangle(0,0,8.5,20.9), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(9.7,9.7,0.487,0.487,0,0,0,9.7,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.5,regY:9.5,scaleX:1.92,scaleY:1.92,x:9.5,y:9.5,alpha:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,3.8,11.8,11.8);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BEA857").ss(1,1,1).p("AhzqCIDQC0QAoAfgDBFIAAH7QADATgjAjIAAGqQgEAhgZgcIjGkcIAAvWQAGgHAIABg");
	this.shape.setTransform(13,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F5DD75","#FDF8AD"],[0,1],11.6,43.8,-7.1,-26.8).s().p("ABFJ2IjGkcIAAvWQAGgHAIABIDQC0QAoAfgDBFIAAH7QADATgjAjIAAGqQgCASgJAAQgHAAgLgNg");
	this.shape_1.setTransform(13,64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(51.4,70.8,0.963,1,0,0,17.8,39.8,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BEA857").ss(1,1,1).p("AmMpPIKsBqQA3AXgGA2IAAItQA5ATADA0IAAEyQgDAmg5gJQABApgkgEInkiA");
	this.shape_2.setTransform(41.2,59.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67B1FF").s().p("AgTAgIAAg/IAnACIAAA9g");
	this.shape_3.setTransform(76.9,106.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFEED").s().p("AgTBsIAAjZIAnAAIAADbg");
	this.shape_4.setTransform(76.9,92.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B49E52","#F5DD75"],[0,1],-39.7,0,33.7,0).s().p("AEuJQInkiAIAAjWQAigjgDgTIAAn7QADhFgogfIjQi0IKsBqQA3AXgGA2IAAItQA5ATADA0IAAEyQgDAmg5gJQABAlgeAAIgGAAgAFRG1IAABAIAoAAIAAg+IAAjcIgoAAg");
	this.shape_5.setTransform(41.2,59.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-1,-1,88.8,136.4), null);


(lib.setinhas_btpadrao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seta_bt_padrao2();
	this.instance.parent = this;
	this.instance.setTransform(-1.8,10.4,1,1,0,0,0,4.2,10.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2.3,alpha:1},4).to({x:13.3},13).to({x:17.4,alpha:0},4).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,8.5,20.9);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-29.1,-64.2,0.409,0.409,0,0,0,39.5,52.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#FFFFFF","#000000"],[0,1],62,69.9,0,62,69.9,133).ss(1,1,1).p("AAKAtQgHACgCgBQAAAAgBAAQgEgDgCgKQgCgNAAgUQAAgSACgOQADgOANAA");
	this.shape.setTransform(-61.9,-69.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AGXzEIANAAQDIAAAADIIAAf5QAADIjIAAItHAAQjIAAAAjIIAA4HIAAiKIAAhcIAAiMIAAhyIAAgOQAAjIDIAAIJ7AAgAJYERIAAz7QAAjFjCAAIm5AAIl0AAQjDAAAADFIAAfWQAADFDDAAIMtAAQDCAAAAjFgAAuvTIHjAAIAAPfIAAN9InlAAIhQAAInvAAIAA9cgAjjwEQAIgIALAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgLAIgIg");
	this.shape_1.setTransform(1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AFMxmQAAgEACgCQABAAAAAAQAGgEAUgCQAagCApAAQAnAAAdACQAbADAAACIAAAHAn3scQgEAAgBgBQAAgBgBAAQgEgEgBgLQgCgQAAgYQAAgYACgRQACgQADAAIAGAAAoAlOQgFgDgCgJQgDgOAAgTQAAgUADgOQADgNADAAIAKAAACcRhIAAgjQAAgUgUAAIgjAAQgUAAAAAUIAAAjQAAAUAUAAIAjAAQAUAAAAgUg");
	this.shape_2.setTransform(-10.6,-8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAnwMIiBAAQgJAAgGgGQgGgGAAgIIAAgBQAAgIAGgGQAGgGAJAAIByAAIBEAAQAJAAAGAGQAGAGAAAIIAAABQAAAIgGAGQgGAGgJAAIg1AAIAEAJAgnNZQgXAJgSASQghAhAAAvQAAAvAhAiQAiAhAuAAQAvAAAighQAhgiAAgvQAAgvghghQgSgSgWgJ");
	this.shape_3.setTransform(1.3,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#167E9C").s().p("AAtOuIhQAAInvAAIAA9cIJBAAIHjAAIAAPfIAAN9g");
	this.shape_4.setTransform(0.8,-2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#280D5D").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAADADQAEAEAAADQAAAFgEADQgDADgEAAQgEAAgDgDg");
	this.shape_5.setTransform(-20,-100.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2D31").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIgAgHgHQgDAEAAADQAAAFADADQADADAEAAQAEAAADgDQADgDAAgFQAAgDgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_6.setTransform(-19.9,-100.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#5E5E5E","#020200"],[0,1],-11.4,0,11.4,0).s().p("AhQBNQghgiAAguQAAgvAhghQATgSAWgJIBQAAQAWAJARASQAiAhAAAvQAAAugiAiQghAhgvABQgugBgighgAglAKQAAATAUAAIAiAAQAUAAAAgTIAAgiQAAgVgUABIgiAAQgUgBAAAVIAAAigAgRAdQgUAAAAgTIAAgiQAAgVAUABIAiAAQAUgBAAAVIAAAiQAAATgUAAgAAlAKg");
	this.shape_7.setTransform(1.3,102.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#111111"],[0,1],-21.1,-49.5,27.9,59.9).s().p("AmWSwQjCAAAAjEIAA/XQAAjEDCAAIF0AAIA+CpIhyAAQgIAAgGAGQgGAGAAAIIAAABQAAAIAGAGQAGAGAIAAICBAAIAEAJIpBAAIAAdcIHvAAQgWAJgSASQgiAhAAAvQAAAvAiAiQAhAhAuAAQAvAAAighQAhgiAAgvQAAgvghghQgSgSgWgJIHlAAIAAt9IBHEFIAALcQAADEjCAAgAjiwFQgIAIAAALQAAALAIAIQAIAIALAAQALAAAIgIQAIgIAAgLQAAgLgIgIQgIgIgLAAQgLAAgIAIg");
	this.shape_8.setTransform(0.8,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AmjTFQjHAAgBjIIAA4HIAAiKIAAhcIAAiMIAAhyIAAgOQABjIDHAAIJ7AAIC/AAIANAAQDHAAABDIIAAf5QgBDIjHAAgApavqIAAfWQAADFDDAAIMtAAQDCAAAAjFIAArbIAAz7QAAjFjCAAIm6AAIlzAAQjDAAAADFg");
	this.shape_9.setTransform(1,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#000000"],[0,1],251.9,122.8,0,251.9,122.8,0).s().p("AoAGTQgFgDgCgKQgDgNAAgUQAAgTADgOQADgOADAAIAKAAQgCBdgHAAIAAAAgAoACtIAAAAQgFgDgCgKQgDgNAAgUQAAgTADgOQADgOANAAIAABcIgHACIgCgBgAn8g8IgBAAQgEgEgBgMQgCgQAAgYQAAgXACgRQACgQADAAIAGAAIAABxIgFgBgAFMmCIAAgDQAAgEACgBIABgBQAGgEAUgBQAagCApAAQAnAAAdACQAbACAAADIAAAGIAAADg");
	this.shape_10.setTransform(-10.6,-82.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#777777").s().p("AAmAVIiAAAQgJAAgGgGQgGgGAAgJIAAAAQAAgIAGgGQAGgGAJAAIBxAAIBEAAQAJAAAGAGQAGAGAAAIIAAAAQAAAJgGAGQgGAGgJAAg");
	this.shape_11.setTransform(1.3,-100.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#959596","#020200"],[0.004,1],-20.9,-28.1,31,61.8).s().p("AD3HbIAAvfIniAAIgEgJIA1AAQAJAAAGgGQAGgGAAgIIAAgBQAAgIgGgGQgGgGgJAAIhEAAIg/ipIG5AAQDCAAAADEIAAT7g");
	this.shape_12.setTransform(29.1,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(-63.9,-123.8,127.8,247.8), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-80.3,-54.1,0.327,0.327,0,0,0,39.5,52.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#167E9C").s().p("AvgJ3IAAzsIfBAAIAATsg");
	this.shape_1.setTransform(-0.9,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626B71").s().p("AkFAeIAQg7IH8AAIAAA7g");
	this.shape_2.setTransform(0.2,76.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah5AWQgEgEAAgGQAAgGAEgEQAFgEAFAAQAHAAADAEQAFAEAAAGQAAAGgFAEQgDAFgHgBQgFABgFgFgAjxAWQgEgEAAgGQAAgGAEgEQAFgEAGAAQAFAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgFgBQgGABgFgFgAllAWQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGgBQgFABgFgFgACTADIAAgcIDXAAIAAAcg");
	this.shape_3.setTransform(23.1,86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8A95").s().p("AJQAOIjXAAI7MAAIAAgaMAqmAAAIAAAag");
	this.shape_4.setTransform(0,82.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292929").s().p("A0jAmIgwgvIAAgcIbMAAIAAAeIDXAAIAAgeIMDAAIAAAsIgeAfgABtgJQgFAFAAAFQAAAGAFAEQAEAEAGAAQAGAAAEgEQAFgEgBgGQABgFgFgFQgEgEgGAAQgGAAgEAEgAgLgJQgDAFAAAFQAAAGADAEQAFAEAGAAQAFAAAEgEQAEgEABgGQgBgFgEgFQgEgEgFAAQgGAAgFAEgAh/gJQgDAFAAAFQAAAGADAEQAFAEAGAAQAGAAAEgEQAEgEAAgGQAAgFgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_5.setTransform(0,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1E20").s().p("AO2ALIhBAAIg+AAIhCAAIg7AAIg8AAIhEAAIhHAAIhCAAIhEAAIhFAAIg5AAIg3AAIgvAAIhLAAIg/AAIg8AAIhEAAIhBAAIg7AAIg3AAIg+AAIhCAAIhCAAIg2AAIhGAAIg+AAIg/AAIg2AAIhGAAIhBAAIg0AAIAAgVIfBAAIAAAVg");
	this.shape_6.setTransform(-0.9,57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C5CA").s().p("A1TB1IEAjpIATAAIgpAoIgoAoIg0AzIBnAAIBuAAIBYAAIBNAAIBFAAIBNAAIA+AAIBGAAIA2AAIBCAAIKjAAIA5AAIBFAAIBEAAIBCAAIBHAAIBEAAIBHAAIBCAAIBJAAIBFAAIBMAAIBKAAIBOAAIBOAAIgzgzIgqgrIgcgcIAIgJIEGDpgAkDBfIIMAAIAAg8In8AAg");
	this.shape_7.setTransform(0,69.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#979AA2").s().p("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");
	this.shape_8.setTransform(-0.4,64.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4C4C6").s().p("AQ/ALIgmAAIgmAAIgYAAIAAgVIB1AAIAAAVgAv+ALIg/AAIgSAAIAAgVIBqAAIAAAVg");
	this.shape_9.setTransform(-0.3,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#010104").s().p("AglAlIAAhJIBLAAIAABJg");
	this.shape_10.setTransform(-0.8,-84.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E3E3E4").s().p("APbLiIAAhUIAAzsIAAiDIByAAIADXDgAxPLiIAA3DIBqAAIAACDIAATsIAABUg");
	this.shape_11.setTransform(-0.3,-17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2F32").s().p("AvgLiIAAhUIfBAAIAABUgAvgpeIAAiDIfBAAIAACDgAgkp2IBLAAIAAhLIhLAAg");
	this.shape_12.setTransform(-0.9,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-137.3,-92.7,274.7,185.5), null);


(lib.setinhas_btpadrao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.seta_bt_padrao2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.8,10.4,1,1,0,0,0,4.2,10.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:2.3,alpha:1},4).to({x:13.3},13).to({x:17.4,alpha:0},4).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,8.5,20.9);


(lib.bt_repetiroutravez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACnBdQgIgDgFgGQgFgFgCgIQgDgIAAgIQAAgJADgJQADgJAFgFQAGgGAHgDQAIgDAIAAQAHAAAHACQAHADAFAFQAFAGADAHQACAHAAAKQAAAKgCAIQgDAIgFAHQgFAGgIADQgHACgIAAQgIAAgHgCgACqAcQgFAEgDAIQgDAGAAAJQAAAIADAGQADAHAFADQAGADAGAAIAJgBQAFgCADgFQADgEACgGIABgMQAAgGgBgFQgCgGgDgDQgDgFgEgBQgEgCgFAAQgHAAgGAEgAAMBdQgHgDgFgGQgFgFgCgIQgCgIAAgIQAAgJADgJQADgJAEgFQAFgGAIgDQAHgDAIAAQAIAAAGACQAHADAFAFQAFAGADAHQADAHAAAKQAAAKgDAIQgCAIgGAHQgFAGgHADQgIACgIAAQgIAAgHgCgAAQAcQgGAEgCAIQgDAGAAAJQAAAIACAGQADAHAGADQAFADAHAAIAJgBQAEgCADgFQAEgEABgGIACgMQAAgGgCgFQgBgGgDgDQgDgFgEgBQgFgCgEAAQgIAAgFAEgADuBeIgHAAIAAgFIAAgFIAAgFIAIAAIAHAAIAAAPgABmBeIgJAAIgCgHIgDgMIgSg+IAIAAIAIAAIABAHIACAFIALArIADALIADgHIAEgKIAPgnIACgEIACgGIAIAAIAHAAIghBRIgJAAgAgeBeIgJAAIgEgIIgJgQIgKgVIgIgQIgCAkIAAAZIgHAAIgHAAIABgYIACgdIAAgcIAKAAIAIAAIAQAeIAPAfIACg2IAAgHIAHAAIAHAAIgDBRIgJAAgAiSBeIgaAAIADhRIAZAAIAYAAIgBANIgFgBIgFAAIgHAAIgKAAIgGAAIgBAVIANAAIAQAAIAAANIgPAAIgPAAIgBAXIAGAAIALAAIARgBIAAANIgXAAgAjuBeIgJAAIAChJIABgIIAKAAIAJAAIAKgBIALABQAFABADACIAHAGIAEAIIADAJIABAKQAAALgDAJQgDAKgGAFQgGAGgHACIgQACgAjoBRIAHABIAJgBIAGgCIAGgEIAEgHIADgIIABgKQAAgJgDgGQgCgFgEgDQgEgCgJAAIgMAAgADwBGIgHAAIABg5IAHAAIAHAAIgDA5IgFAAgAAKgKQgIAAgFgCQgHgDgFgFQgGgGgCgHQgDgIAAgJQAAgKADgJQADgIAGgGQAFgFAHgDQAHgDAIAAQAIAAAJACIAAAHIABAHIgKgCIgHgBQgFAAgFACQgEACgDAEQgEAEgCAGQgCAGAAAHQAAAHADAHQACAGAGAEQAEADAIAAQAHAAALgDIgCAOIgLACIgHAAgAhXgMQgHgDgFgGQgGgGgCgHQgCgIAAgIQAAgKADgIQADgJAFgGQAFgFAIgDQAHgDAIAAQAIAAAGACQAHACAFAGQAFAFADAIQADAHAAAKQAAAKgDAIQgCAIgGAGQgFAGgHAEQgIACgIAAQgIAAgHgCgAhThNQgGAEgCAHQgDAHAAAJQAAAHACAHQADAGAGAEQAFADAHAAQAEAAAFgCQAEgCADgEQAEgEABgGQACgGAAgGQAAgGgCgFQgBgGgDgEQgDgEgEgCQgFgCgEABIgCAAQgGAAgFAEgACggLIgIAAIgFgQIgEgJIgGgOIgCgGIAGAAIAIgBQADgCACgEQACgDAAgEIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEgCIgGgBIgEABIgGAAIgCBFIgHAAIgIAAIADgpIAAgoIAKAAIAJAAIAIgBQAGAAAEABQAFABADACQAEADABAFQACADAAAGIgBAGIgBAGIgDAEIgEADIgEADIgFACIADAHIAGAOIAFAKIACAGIgIAAgABlgLIgJAAIgDgOIgFgPIgZAAIgLAdIgIAAIgJAAIAMgbIANgfIAKgXIAJAAIAJAAIAYBRgAA/g1IATAAIgIgbgAiPgLIgIAAIADhFIgVAAIABgMIAdAAIAbAAIgBAMIgQAAIgEAAIgCA8IAAAJg");
	this.shape.setTransform(9,13.6);

	this.instance = new lib.setinhas_btpadrao_1();
	this.instance.parent = this;
	this.instance.setTransform(44.8,12,1,1,0,0,0,4.2,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AkXCHIAAkMIIvAAIAAEMg");
	this.shape_1.setTransform(19.6,13.5,1.298,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,1.6,58.9,21.5);


(lib.TOCARANIMACAO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAuQgHAAgFgDQgIgCgEgHQgGgGgCgHQgDgJAAgKQAAgKADgIQADgJAGgHQAEgFAIgEQAGgEAJAAQAHABAKADIAAAIIABAGIgKgCIgHgBQgFAAgFACQgEACgDAFQgEAEgCAHQgCAGAAAGQAAAJACAGQADAHAFAEQAFAEAIAAQAHAAALgDIgDAOIgKADIgIAAgAhXArQgHgDgGgGQgFgGgCgIQgCgIgBgKQAAgIADgKQAEgKAEgGQAGgFAIgEQAHgEAIAAQAIABAGADQAHACAFAGQAFAGADAIQADAHAAALQAAAKgDAIQgDAJgFAHQgFAHgIADQgHADgIAAQgIAAgHgDgAhUgaQgFAFgDAIQgCAHAAAIQgBAJADAGQADAHAFAFQAGADAGAAQAFAAAEgCQAFgCADgFQADgEACgHQABgGABgGQgBgGgBgGQgCgGgDgEQgCgFgFgCQgEgCgFAAQgHABgGAEgACgAsIgIAAIgFgQIgEgKIgGgQIgDgGIAGABQAFABAEgCQADgCABgEQADgDAAgFIgBgFIgDgEIgEgCIgGgBIgEABIgGAAIgCBJIgHAAIgIAAIACgsIABgqIAKAAIAJAAIAIgBQAFAAAFACQAEAAAEACQADAEACAEQACAFAAAFIgBAHIgCAHIgCAEIgEADIgEACIgGACIAEAJIAFAPIAGALIACAFIgIAAgABlAsIgJAAIgEgPIgEgQIgZAAIgLAfIgIAAIgJAAIAMgdIANgfIAKgaIAJAAIAJAAIAYBWgAA/AAIASAAIgHgdgAiPAsIgIAAIADhJIgVAAIABgNIAdAAIAbAAIgBANIgQAAIgFAAIgCA/IAAAKg");
	this.shape.setTransform(-4.6,-2.2);

	this.instance = new lib.setinhas_btpadrao();
	this.instance.parent = this;
	this.instance.setTransform(35,5.1,1,1.319,0,0,0,4.2,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABiBEIgIAAIAFgIIAFgKIAHAAIAFAAIgHASIgHAAgADoArQgHgCgGgIQgFgFgCgIQgDgIAAgKQAAgJAEgJQACgKAGgGQAFgGAHgDQAIgDAIAAQAHAAAHACQAHADAFAGQAFAGADAHQACAJABAKQgBAKgCAJQgCAIgGAHQgFAGgIAEQgHADgIAAQgIAAgHgDgADrgaQgFAEgDAIQgDAIAAAIQABAIACAIQADAGAFAFQAGADAHAAQAEAAAFgCQAEgCADgFQADgFACgGQACgGgBgGQABgGgCgGQgBgGgEgEQgDgFgDgCQgFgCgEAAQgIABgGAEgABqAuQgIAAgHgDQgGgCgFgHQgGgGgCgHQgDgJAAgKQAAgJADgJQADgJAFgHQAFgGAIgDQAIgDAHAAQAJAAAJACIAAAIIAAAIIgJgDIgHgBQgFAAgFACQgEACgFAEQgDAFgCAHQgCAGAAAGQAAAIADAIQACAGAGAEQAEAEAIAAQAIAAALgDIgCAOIgLADIgHAAgADFAtIgJAAIgDgQIgFgQIgaAAIgLAgIgIAAIgIAAIAMgeIANgfIAKgaIAIAAIAKAAIAYBXgACfAAIATAAIgIgdgAA4AtIgJAAIgDgQIgFgQIgZAAIgLAgIgHAAIgIAAIAMgeIALgfIAKgaIAJAAIAJAAIAYBXgAASAAIATAAIgIgdgAgYAtIgGAAIABgMIAAglIABgQIgBgFIgUBGIgGAAIgIAAIgIgpIgBgIIgDgMIgCgEIgBgEIAAAIIgBAMIgCAoIAAAJIgGAAIgGAAIAFhXIAKAAIAKAAIABAHIACAHIACAMIAFAUIAEASIAQg2IABgDIABgHIALAAIAJAAIgBAoIAAAhIAAAOIgHAAgAhxAtIgJAAIADgtIAAgkIAAgGIAIAAIAHAAQgBAhgBA2gAiQAtIgJAAIgFgJIgIgRIgLgWIgIgSIgBAnIgBAbIgGAAIgHAAIABgaIABgfIABgeIAJAAIAJAAIAQAgIAPAhIACg6IAAgHIAGAAIAHAAIgCBXIgJAAgAjXAtIgJAAIgDgQIgFgQIgZAAIgLAgIgIAAIgJAAIANgeIAMgfIAKgaIAJAAIAJAAIAZBXgAj8AAIASAAIgIgdgACwgzIgDgBIgDgDIgDgDIgCAAIgBAAIgBACIAAAEIgDAAIgDAAIABgJIACgFQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIABAAIACABIABAAIACACIACADIACABIACAAIABAAIABgBIABgCIAAgDIACAAIAEAAIgBAIIgCAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(-4.9,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AlwCTIAAklILhAAIAAElg");
	this.shape_2.setTransform(0.1,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-8.7,66.7,27.5);


// stage content:
(lib.orientacoes_04_LQUIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.bt1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		playSound("Poppy_clWho_Else8472_hifi_aditado",3);
		playSound("Nidia_animacao04");
	}
	this.frame_651 = function() {
		this.stop();
		
		
		this.bt2.addEventListener("click", fl_ClickToGoToAndStopAtFrame2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame2()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(650).call(this.frame_651).wait(1));

	// Layer 13
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(352.5,204.1,1,1,0,0,0,39.5,52.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(478).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:73.8,y:91.1,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,scaleX:1,scaleY:1,x:352.5,y:204.1,alpha:1},0).to({scaleX:0.53,scaleY:0.53,x:258.9,y:82.9,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,scaleX:1,scaleY:1,x:352.5,y:204.1,alpha:1},0).to({scaleX:0.53,scaleY:0.53,x:448.2,y:81.9,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,scaleX:1,scaleY:1,x:352.5,y:204.1,alpha:1},0).to({scaleX:0.53,scaleY:0.53,x:595.7,y:86.6,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(104));

	// Layer 12
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(595.7,-88.9,1,1,0,0,0,40.5,64.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol3copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(595.7,86.6,1,1,0,0,0,40.5,64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},435).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},102).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(435).to({_off:false},0).to({y:95.7},9).to({y:86.6},3).to({_off:true},102).wait(103));

	// Layer 11
	this.instance_3 = new lib.Symbol1copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(260,-86.1,0.589,0.589,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol1copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(260,82.9,0.589,0.589,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},380).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},117).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(380).to({_off:false},0).to({y:91.3},11,cjs.Ease.get(1)).to({y:82.9},3).to({_off:true},117).wait(141));

	// Layer 10
	this.instance_5 = new lib.Symbol1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(448.2,-93.6,0.485,0.485,0,0,0,0.1,0);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol1copy3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(448.2,81.9,0.485,0.485,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},410).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},109).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(410).to({_off:false},0).to({y:92.3},9,cjs.Ease.get(1)).to({y:81.9},3).to({_off:true},109).wait(121));

	// Layer 9
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(71,-97.1,0.886,0.886,0,0,0,20.4,64);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(343).to({_off:false},0).to({y:97.9},8,cjs.Ease.get(1)).to({y:84.9},3).wait(298));

	// Layer 7
	this.bt1 = new lib.TOCARANIMACAO();
	this.bt1.parent = this;
	this.bt1.setTransform(351.3,131.5,1.297,1.231,0,0,0,0.9,0.1);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.TOCARANIMACAO(), 3);

	this.instance_8 = new lib.Symbol11("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(356.4,306.2,1,1,0,0,0,9.7,9.7);

	this.bt2 = new lib.bt_repetiroutravez();
	this.bt2.parent = this;
	this.bt2.setTransform(628.8,363.5,1.225,1.225,0,0,0,28.1,13.6);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.bt_repetiroutravez(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1}]}).to({state:[]},1).to({state:[{t:this.instance_8}]},240).to({state:[]},14).to({state:[{t:this.bt2}]},396).wait(1));

	// Layer 6
	this.instance_9 = new lib.Symbol10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(750.1,104.6,0.728,0.728,0,0,0,8.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({x:460.1,y:215.1},8,cjs.Ease.get(1)).wait(174).to({x:358.1,y:313.8},8,cjs.Ease.get(1)).wait(413));

	// Layer 3
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(352.5,243.1,1,1,0,0,0,39.5,52.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(267).to({_off:false},0).to({y:204.1,alpha:1},10,cjs.Ease.get(1)).wait(375));

	// Layer 2
	this.instance_11 = new lib.Símbolo3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(365.5,300.2,1,1,0,0,0,59.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({regX:59.2,regY:11.2,scaleX:1.22,scaleY:1.22,x:365.6,y:300.4},8,cjs.Ease.get(1)).wait(535));

	// Layer 1
	this.instance_12 = new lib.Símbolo4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(533.6,300.2,1,1,0,0,0,76.3,11.1);

	this.instance_13 = new lib.Símbolo2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(221.9,300.2,1,1,0,0,0,37.5,11.1);

	this.instance_14 = new lib.Símbolo1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(126.4,300.2,1,1,0,0,0,23.1,11.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAA6IgCAAIgDgBIgBgBIAAgBIAAhtIAAgBIABgBIADgBIACAAIADAAIADABIABABIAAABIAABtIAAABIgBABIgDABIgDAAg");
	this.shape.setTransform(530.5,372.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgOAnQgFgBgDgDQgEgDgCgEQgCgFAAgFQAAgGADgEQADgFAEgDQAFgCAHgCQAHgCAIAAIAKAAIAAgFIgBgIQgBgEgCgCQgCgCgDAAQgDgCgFAAQgEAAgEACIgHACIgFACIgDACIgBAAIgBgCIgBgBIAAgDIAAgCIACgDIAEgDIAGgCIAIgCIAHgBQAIAAAGACQAGACADADQAEADABAGQACAFAAAHIAAAxIgBACIgCAAIgDABIgEgBIgBAAIgBgCIAAgHQgFAFgGADQgGADgGAAQgGAAgEgCgAgDAFIgHACQgDACgBACIgCAGQAAAGAEAEQAEADAGAAQAFAAAEgDQAFgCAFgGIAAgQIgMAAIgIACg");
	this.shape_1.setTransform(524.2,374.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgRAmQgFgDgDgEQgDgEgCgGIgBgOIAAgsIAAgBIABgBIADAAIADgBIADABIACAAIABABIABABIAAAqIABALIACAHIAGAFQACABAEAAQAEAAAGgEQAEgDAHgIIAAgzIAAgBIABgBIACAAIAEgBIADABIABAAIACABIAAABIAABKIAAABIgBABIgCAAIgDAAIgDAAIgCAAIgBgBIAAgBIAAgKQgHAHgGAEQgGACgGAAQgHABgFgDg");
	this.shape_2.setTransform(515.9,374.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AABAxQgEgBgCgEIgEgHIgBgMIAAgrIgKAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAIgBgEIABgDIAAgCIABgBIACAAIAKAAIAAgSIABgBIABgBIABAAIADAAIAEAAIABAAIABABIAAABIAAASIAUAAIABAAIABABIABACIAAADIgBAEIgCABIgUAAIAAApQABAIACAEQACADAGABIAEAAIACgBIACgBIABAAIACAAIAAABIABABIAAACIgBAFIgBACIgCABIgDAAIgDABIgEAAQgGABgEgCg");
	this.shape_3.setTransform(508.5,373.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgOAoIgEAAIgBAAIgBgBIgBgBIAAhKIABgBIABgBIABAAIADgBIAEABIACAAIAAABIAAABIAAALIAHgHIADgFIAGgCIAEAAIADAAIACAAIADABIABAAIACABIAAABIAAACIAAADIAAADIAAACIgBACIgBAAIgCAAIgCgBIgCgBIgEgBIgEACIgEACIgEAFIgFAIIAAAwIgBABIgBABIgBAAIgEAAg");
	this.shape_4.setTransform(503.3,374.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAAA3IgCAAIgCAAIgCgBIAAgBIAAhKIAAgBIACgBIACAAIACgBIAEABIACAAIABABIAAABIAABKIAAABIgBABIgCAAIgEAAgAgGgoQgCgBAAgFQAAgFACgCQACgBAEAAQAFAAACABQABACAAAFQAAAFgBABQgCACgFAAQgEAAgCgCg");
	this.shape_5.setTransform(497.9,372.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAAA2IgCAAIgCAAIgCAAIgBgBIgBgBIgBgBIgjhjIAAgDIAAgBIADgBIAEAAIAEAAIACAAIABABIABACIAeBZIAehZIAAgCIABgBIADAAIAEAAIAEAAIACABIAAACIgBACIgjBjIAAACIgCABIgDAAIgEAAg");
	this.shape_6.setTransform(491.1,373);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgLAzQgIgDgHgHQgGgHgDgKQgDgKAAgNQAAgMADgLQAEgKAGgIQAGgHAJgDQAIgEAKAAIAJAAIAJADIAGADIAEADIABACIABABIAAACIAAACIAAADIAAACIgBACIgBAAIgDgCIgGgEIgIgDQgFgCgGAAQgHAAgFADQgGADgEAFQgEAGgCAIQgDAIAAAKQAAAJADAJQABAIAEAEQAFAGAGADQAFACAHAAQAHAAAEgBIAJgEIAGgEIADgBIABAAIAAABIABACIAAAEIAAACIgBABIAAABIgBACIgDADIgHADIgJACQgGACgFAAQgKAAgIgEg");
	this.shape_7.setTransform(478.1,373.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgUA2IgDAAIgCgBIgCgBIAAgBIAAhiQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAvAAIABABIACABIAAACIAAACIAAADIAAACIgCABIgBAAIgmAAIAAAlIAkAAIABAAIABABIABACIAAACIAAADIgBABIgBABIgBAAIgkAAIAAAtIAAABIgBABIgCABIgEAAg");
	this.shape_8.setTransform(469.8,373.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgQA0QgHgCgGgFQgEgFgDgIQgEgHAAgKIAAhCIABgBIABgBIADAAIADgBIADABIADAAIABABIAAABIAABAQAAAHABAGQADAGADADQADAEAFACQAFACAFAAQAHAAAEgCQAFgCAEgEQADgDABgGQADgFAAgHIAAhBIAAgBIABgBIACAAIADgBIAEABIACAAIABABIAAABIAABBQAAAJgCAIQgDAIgGAFQgFAFgHADQgIADgJAAQgJAAgHgDg");
	this.shape_9.setTransform(460.1,373.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgQAmQgHgCgEgGQgFgFgCgIQgCgHAAgKQAAgIACgHQACgIAFgFQAFgGAHgDQAHgDAJAAQAJAAAHADQAHACAEAGQAFAFACAHQACAIAAAJQAAAJgCAHQgCAIgFAFQgFAGgHADQgHADgJAAQgJAAgHgDgAgJgbQgFADgCAEQgDAEgCAFQgBAGAAAFQAAAGABAFQABAGADAEQACAEAFACQAEACAGAAQAGAAAEgCQAFgCADgEQADgEABgFQABgGAAgGIgBgKIgEgKQgCgEgFgCQgEgDgHABQgFAAgEABg");
	this.shape_10.setTransform(446.3,374.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AABAxQgDgBgDgEIgEgHIgBgMIAAgrIgLAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAIAAgEIAAgDIAAgCIABgBIABAAIALAAIAAgSIAAgBIACgBIACAAIACAAIAEAAIABAAIACABIAAABIAAASIATAAIABAAIABABIAAACIAAADIAAAEIgCABIgTAAIAAApQgBAIADAEQACADAGABIADAAIADgBIACgBIABAAIABAAIABABIAAABIAAACIAAAFIgBACIgCABIgDAAIgEABIgDAAQgGABgEgCg");
	this.shape_11.setTransform(438.9,373.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgRAmQgFgDgDgEQgEgEgBgGIgBgOIAAgsIAAgBIABgBIACAAIAEgBIADABIACAAIABABIABABIAAAqIABALIACAHIAGAFQADABADAAQAFAAAEgEQAFgDAHgIIAAgzIAAgBIABgBIACAAIADgBIAEABIABAAIACABIAAABIAABKIAAABIgBABIgCAAIgDAAIgDAAIgCAAIgBgBIAAgBIAAgKQgHAHgGAEQgGACgFAAQgIABgFgDg");
	this.shape_12.setTransform(431.7,374.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AABAxQgDgBgDgEIgEgHIgBgMIAAgrIgLAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAIgBgEIABgDIAAgCIABgBIABAAIALAAIAAgSIABgBIABgBIABAAIADAAIAEAAIABAAIABABIAAABIAAASIAUAAIABAAIABABIABACIAAADIgBAEIgCABIgUAAIAAApQABAIACAEQACADAGABIAEAAIACgBIACgBIABAAIABAAIABABIABABIAAACIgBAFIgBACIgCABIgDAAIgEABIgDAAQgGABgEgCg");
	this.shape_13.setTransform(424.2,373.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAAA3IgCAAIgCAAIgCgBIAAgBIAAhKIAAgBIACgBIACAAIACgBIAEABIACAAIABABIAAABIAABKIAAABIgBABIgCAAIgEAAgAgGgoQgCgBAAgFQAAgFACgCQACgBAEAAQAFAAACABQABACAAAFQAAAFgBABQgCACgFAAQgEAAgCgCg");
	this.shape_14.setTransform(419.6,372.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AABAxQgEgBgCgEIgEgHIgBgMIAAgrIgKAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgCgEIABgDIABgCIABgBIABAAIAKAAIAAgSIAAgBIABgBIACAAIAEAAIADAAIABAAIABABIAAABIAAASIAUAAIABAAIABABIABACIAAADIgBAEIgCABIgUAAIAAApQAAAIADAEQACADAGABIADAAIADgBIACgBIACAAIABAAIAAABIABABIAAACIgBAFIgBACIgCABIgDAAIgDABIgEAAQgGABgEgCg");
	this.shape_15.setTransform(414.6,373.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgJApIgHgCIgEgCIgEgCIgBgCIgBgFIABgCIAAgCIABAAIABgBIADABIAEADIAHACIAIABIAFgBIAFgCIADgDIABgGQAAgDgCgCQgBgCgDgCIgGgDIgGgDIgGgDIgGgDIgFgGQgBgEgBgFQAAgEACgEQACgFADgDQAEgDAFgBQAFgCAGAAIAGABIAFABIAEACIADABIABABIAAABIAAABIABADIgBACIAAACIgBABIgBAAIgCgBIgDgCIgFgBIgIgBIgEABIgFABIgCAEIgBAFQAAADACACIADAEIAGACIAHAEIAHADIAFADQADACACAEQABAEABAEQAAAGgCAEQgCAFgFADQgDADgGABQgFACgFAAIgIAAg");
	this.shape_16.setTransform(408.6,374.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AAZAoIgDAAIgCAAIgBgBIAAgBIAAgrIgBgKIgDgHIgFgEQgDgCgEAAQgEAAgGAEQgFADgFAIIAAAzIgBABIgBABIgCAAIgDAAIgEAAIgCAAIgBgBIAAgBIAAhKIAAgBIABgBIACAAIADgBIADABIACAAIABABIAAABIAAAKQAHgHAGgDQAGgDAGAAQAHAAAFACQAFACADAFQAEAEABAFQABAHAAAIIAAAsIAAABIgBABIgCAAIgEAAg");
	this.shape_17.setTransform(400.8,374.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAAA2IgCAAIgDAAIgBgBIAAgBIAAhnIAAgBIABAAIADgBIACAAIADAAIADABIABAAIAAABIAABnIAAABIgBABIgDAAIgDAAg");
	this.shape_18.setTransform(394.2,373);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgRAGQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAgBgBIgBgEIABgEIACgBIAiAAIABAAIACABIAAACIABACQAAABgBAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_19.setTransform(385.6,374.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgOA5QgFgBgDgDQgEgDgCgEQgCgFAAgFQAAgGADgEQADgFAEgEQAFgCAHgCQAHgCAIAAIAKAAIAAgFIgBgHQgBgEgCgCQgCgCgDAAQgDgCgFAAQgEAAgEACIgHACIgFACIgDACIgBAAIgBgCIgBgBIAAgDIAAgCIACgDIAEgDIAGgCIAIgCIAHgBQAIAAAGACQAGACADADQAEADABAGQACAFAAAGIAAAyIgBACIgCAAIgDABIgEgBIgBAAIgBgCIAAgHQgFAFgGADQgGADgGAAQgGAAgEgCgAgDAXIgHACQgDACgBACIgCAGQAAAGAEAEQAEADAGAAQAFAAAEgDQAFgCAFgGIAAgQIgMAAIgIACgAABggIgCgBIgBAAIgBgBIABgBIALgUIABgBIACgBIACAAIADgBIAEABIACABIABABIgBABIgPATIgBABIgBABIgCABIgDAAg");
	this.shape_20.setTransform(374.8,372.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgOAoIgEAAIgCAAIgBgBIAAgBIAAhKIAAgBIABgBIACAAIAEgBIACABIACAAIABABIAAABIAAALIAHgHIAEgFIAEgCIAFAAIADAAIACAAIADABIACAAIABABIAAABIAAACIAAADIAAADIAAACIgBACIgBAAIgCAAIgCgBIgCgBIgEgBIgEACIgEACIgEAFIgFAIIAAAwIgBABIgBABIgCAAIgDAAg");
	this.shape_21.setTransform(368.5,374.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgOAnQgFgBgDgDQgEgDgCgEQgCgFAAgFQAAgGADgEQADgFAEgDQAFgCAHgCQAHgCAIAAIAKAAIAAgFIgBgIQgBgEgCgCQgCgCgDAAQgDgCgFAAQgEAAgEACIgHACIgFACIgDACIgBAAIgBgCIgBgBIAAgDIAAgCIACgDIAEgDIAGgCIAIgCIAHgBQAIAAAGACQAGACADADQAEADABAGQACAFAAAHIAAAxIgBACIgCAAIgDABIgEgBIgBAAIgBgCIAAgHQgFAFgGADQgGADgGAAQgGAAgEgCgAgDAFIgHACQgDACgBACIgCAGQAAAGAEAEQAEADAGAAQAFAAAEgDQAFgCAFgGIAAgQIgMAAIgIACg");
	this.shape_22.setTransform(360.7,374.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgMAmQgHgCgEgFQgGgFgCgIQgDgHAAgLQAAgIADgIQACgHAGgGQAEgFAHgDQAGgDAHAAQAKAAAFADQAHACADAGQAFAEACAHQABAGAAAHIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEACIgwAAIABALQABAFAEAEQACADAFACQAEACAHAAIAJgBIAHgCIAFgCIADAAIABAAIABABIAAABIABACIgBADIAAABIAAABIgBABIgDABIgFACIgJADIgKAAQgIAAgHgDgAgHgbQgEABgCADIgFAIQgBAEAAAFIAoAAQAAgLgFgGQgFgHgKABQgEAAgEACg");
	this.shape_23.setTransform(352.6,374.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgLAzQgIgDgHgHQgFgHgEgKQgDgKAAgNQAAgMADgLQAEgKAGgIQAGgHAJgDQAIgEAKAAIAJAAIAIADIAHADIAEADIABACIABABIABACIAAACIAAADIgBACIgBACIgBAAIgDgCIgGgEIgIgDQgFgCgGAAQgHAAgFADQgGADgEAFQgEAGgCAIQgDAIAAAKQAAAJADAJQABAIAFAEQAEAGAGADQAFACAHAAQAHAAAEgBIAJgEIAFgEIAEgBIABAAIABABIAAACIAAAEIAAACIAAABIgBABIgBACIgEADIgGADIgJACQgGACgGAAQgJAAgIgEg");
	this.shape_24.setTransform(344.1,373.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgQAmQgHgCgEgGQgFgFgCgIQgCgHAAgKQAAgIACgHQACgIAFgFQAFgGAHgDQAHgDAJAAQAJAAAHADQAHACAEAGQAFAFACAHQACAIAAAJQAAAJgCAHQgCAIgFAFQgFAGgHADQgHADgJAAQgJAAgHgDgAgJgbQgFADgCAEQgDAEgCAFQgBAGAAAFQAAAGABAFQABAGADAEQACAEAFACQAEACAGAAQAGAAAEgCQAFgCADgEQADgEABgFQABgGAAgGIgBgKIgEgKQgCgEgFgCQgEgDgHABQgFAAgEABg");
	this.shape_25.setTransform(331,374.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgRA4QgGgEgDgFQgEgGgCgHQgBgIAAgHQAAgKACgIQACgGAEgGQAEgFAGgEQAGgDAIABQAFgBAGADQAFADAGAGIAAgsIAAgBIABgBIACAAIADgBIAEABIACAAIABABIAAABIAABuIAAABIgBABIgCAAIgDAAIgCAAIgCAAIgBgBIgBgBIAAgKQgGAHgGADQgGADgHAAQgIAAgGgCgAgJgIQgDACgDAEQgCAEgBAEIgBALIABALIADAKQACAEAEADQADACAGAAIAEgBIAFgDIAGgEIAGgHIAAgdQgGgHgFgDQgFgEgFAAQgFAAgEADg");
	this.shape_26.setTransform(321.8,372.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AAAA6IgCAAIgDgBIgBgBIAAgBIAAhtIAAgBIABgBIADgBIACAAIADAAIADABIABABIAAABIAABtIAAABIgBABIgDABIgDAAg");
	this.shape_27.setTransform(311.8,372.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgOAnQgFgBgDgDQgEgDgCgEQgCgFAAgFQAAgGADgEQADgFAEgDQAFgCAHgCQAHgCAIAAIAKAAIAAgFIgBgIQgBgEgCgCQgCgCgDAAQgDgCgFAAQgEAAgEACIgHACIgFACIgDACIgBAAIgBgCIgBgBIAAgDIAAgCIACgDIAEgDIAGgCIAIgCIAHgBQAIAAAGACQAGACADADQAEADABAGQACAFAAAHIAAAxIgBACIgCAAIgDABIgEgBIgBAAIgBgCIAAgHQgFAFgGADQgGADgGAAQgGAAgEgCgAgDAFIgHACQgDACgBACIgCAGQAAAGAEAEQAEADAGAAQAFAAAEgDQAFgCAFgGIAAgQIgMAAIgIACg");
	this.shape_28.setTransform(305.5,374.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgOAoIgDAAIgCAAIgBgBIgBgBIAAhKIABgBIABgBIACAAIACgBIAEABIACAAIABABIAAABIAAALIAGgHIADgFIAGgCIAEAAIACAAIAEAAIACABIABAAIABABIAAABIABACIAAADIAAADIgBACIAAACIgBAAIgCAAIgCgBIgDgBIgDgBIgEACIgEACIgEAFIgFAIIAAAwIAAABIgBABIgCAAIgEAAg");
	this.shape_29.setTransform(299.2,374.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgMAmQgHgCgEgFQgFgFgDgIQgCgHAAgLQAAgIACgIQADgHAFgGQAEgFAHgDQAGgDAIAAQAIAAAGADQAHACADAGQAFAEACAHQABAGAAAHIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEACIgwAAIABALQACAFADAEQACADAFACQAEACAHAAIAJgBIAHgCIAFgCIADAAIABAAIABABIAAABIABACIgBADIAAABIAAABIgBABIgDABIgFACIgJADIgKAAQgIAAgHgDgAgHgbQgEABgCADIgFAIQgBAEAAAFIAoAAQAAgLgFgGQgFgHgKABQgEAAgEACg");
	this.shape_30.setTransform(291.5,374.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgRA4QgGgEgDgFQgEgGgCgHQgBgIAAgHQAAgKACgIQACgGAEgGQAEgFAGgEQAGgDAIABQAFgBAGADQAFADAGAGIAAgsIAAgBIABgBIACAAIADgBIAEABIACAAIABABIAAABIAABuIAAABIgBABIgCAAIgDAAIgCAAIgCAAIgBgBIgBgBIAAgKQgGAHgGADQgGADgHAAQgIAAgGgCgAgJgIQgDACgDAEQgCAEgBAEIgBALIABALIADAKQACAEAEADQADACAGAAIAEgBIAFgDIAGgEIAGgHIAAgdQgGgHgFgDQgFgEgFAAQgFAAgEADg");
	this.shape_31.setTransform(282.6,372.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgMAmQgHgCgFgFQgFgFgCgIQgCgHgBgLQABgIACgIQACgHAFgGQAFgFAHgDQAHgDAGAAQAJAAAHADQAFACAEAGQAFAEACAHQACAGAAAHIAAADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEACIgwAAIABALQACAFACAEQADADAFACQAEACAHAAIAJgBIAHgCIAFgCIADAAIABAAIABABIAAABIABACIgBADIAAABIgBABIAAABIgDABIgGACIgIADIgKAAQgIAAgHgDgAgHgbQgEABgDADIgEAIQgBAEAAAFIAnAAQABgLgFgGQgFgHgKABQgEAAgEACg");
	this.shape_32.setTransform(274.1,374.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgUA2IgEAAIgCgBIgBgBIAAgBIAAhiQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAwAAIABABIABABIAAACIAAACIAAADIAAACIgBABIgBAAIgnAAIAAAlIAkAAIACAAIABABIAAACIAAACIAAADIAAABIgBABIgCAAIgkAAIAAAtIgBABIgBABIgBABIgEAAg");
	this.shape_33.setTransform(266.4,373.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgMAmQgHgCgEgFQgFgFgDgIQgDgHABgLQgBgIADgIQADgHAFgGQAEgFAGgDQAHgDAIAAQAJAAAGADQAFACAFAGQADAEACAHQACAGABAHIAAADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEACIgwAAIABALQABAFADAEQADADAFACQAFACAFAAIAKgBIAHgCIAFgCIADAAIABAAIABABIAAABIAAACIAAADIAAABIgBABIAAABIgDABIgGACIgIADIgKAAQgIAAgHgDgAgHgbQgEABgDADIgDAIQgCAEAAAFIAnAAQABgLgFgGQgFgHgKABQgEAAgEACg");
	this.shape_34.setTransform(254,374.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgRA4QgGgEgDgFQgEgGgCgHQgBgIAAgHQAAgKACgIQACgGAEgGQAEgFAGgEQAGgDAIABQAFgBAGADQAFADAGAGIAAgsIAAgBIABgBIACAAIADgBIAEABIACAAIABABIAAABIAABuIAAABIgBABIgCAAIgDAAIgCAAIgCAAIgBgBIgBgBIAAgKQgGAHgGADQgGADgHAAQgIAAgGgCgAgJgIQgDACgDAEQgCAEgBAEIgBALIABALIADAKQACAEAEADQADACAGAAIAEgBIAFgDIAGgEIAGgHIAAgdQgGgHgFgDQgFgEgFAAQgFAAgEADg");
	this.shape_35.setTransform(245.1,372.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgOAnQgFgBgDgDQgEgDgCgEQgCgFAAgFQAAgGADgEQADgFAEgDQAFgCAHgCQAHgCAIAAIAKAAIAAgFIgBgIQgBgEgCgCQgCgCgDAAQgDgCgFAAQgEAAgEACIgHACIgFACIgDACIgBAAIgBgCIgBgBIAAgDIAAgCIACgDIAEgDIAGgCIAIgCIAHgBQAIAAAGACQAGACADADQAEADABAGQACAFAAAHIAAAxIgBACIgCAAIgDABIgEgBIgBAAIgBgCIAAgHQgFAFgGADQgGADgGAAQgGAAgEgCgAgDAFIgHACQgDACgBACIgCAGQAAAGAEAEQAEADAGAAQAFAAAEgDQAFgCAFgGIAAgQIgMAAIgIACg");
	this.shape_36.setTransform(236.5,374.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgRA4QgGgEgDgFQgEgGgCgHQgBgIAAgHQAAgKACgIQACgGAEgGQAEgFAGgEQAGgDAIABQAFgBAGADQAFADAGAGIAAgsIAAgBIABgBIACAAIADgBIAEABIACAAIABABIAAABIAABuIAAABIgBABIgCAAIgDAAIgCAAIgCAAIgBgBIgBgBIAAgKQgGAHgGADQgGADgHAAQgIAAgGgCgAgJgIQgDACgDAEQgCAEgBAEIgBALIABALIADAKQACAEAEADQADACAGAAIAEgBIAFgDIAGgEIAGgHIAAgdQgGgHgFgDQgFgEgFAAQgFAAgEADg");
	this.shape_37.setTransform(228,372.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AAAA3IgCAAIgDAAIgBgBIAAgBIAAhKIAAgBIABgBIADAAIACgBIADABIADAAIABABIAAABIAABKIAAABIgBABIgDAAIgDAAgAgGgoQgBgBgBgFQABgFABgCQACgBAEAAQAFAAACABQACACAAAFQAAAFgCABQgCACgFAAQgEAAgCgCg");
	this.shape_38.setTransform(221.8,372.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgJApIgHgCIgEgCIgEgCIgBgCIgBgFIABgCIAAgCIABAAIABgBIADABIAEADIAHACIAIABIAFgBIAFgCIADgDIABgGQAAgDgCgCQgBgCgDgCIgGgDIgGgDIgGgDIgHgDIgEgGQgCgEAAgFQAAgEADgEQABgFADgDQAEgDAFgBQAFgCAGAAIAGABIAFABIAEACIADABIABABIABABIAAABIAAADIAAACIAAACIgCABIgBAAIgCgBIgDgCIgGgBIgHgBIgEABIgFABIgCAEIgBAFQAAADACACIADAEIAFACIAIAEIAHADIAFADQAEACABAEQABAEAAAEQABAGgCAEQgDAFgEADQgDADgGABQgFACgFAAIgIAAg");
	this.shape_39.setTransform(216.5,374.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgOAoIgDAAIgDAAIgBgBIAAgBIAAhKIAAgBIABgBIADAAIADgBIACABIACAAIACABIAAABIAAALIAFgHIAFgFIAEgCIAFAAIACAAIADAAIADABIACAAIAAABIAAABIABACIAAADIAAADIgBACIAAACIgBAAIgCAAIgCgBIgDgBIgDgBIgEACIgEACIgEAFIgFAIIAAAwIAAABIgBABIgDAAIgDAAg");
	this.shape_40.setTransform(210.7,374.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgMAmQgHgCgFgFQgFgFgCgIQgCgHgBgLQABgIACgIQACgHAFgGQAFgFAHgDQAHgDAGAAQAJAAAHADQAFACAEAGQAFAEACAHQACAGAAAHIAAADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEACIgwAAIABALQACAFACAEQADADAFACQAEACAHAAIAJgBIAHgCIAFgCIADAAIABAAIABABIAAABIABACIgBADIAAABIgBABIAAABIgDABIgGACIgIADIgKAAQgIAAgHgDgAgHgbQgEABgDADIgEAIQgBAEAAAFIAnAAQABgLgFgGQgFgHgKABQgEAAgEACg");
	this.shape_41.setTransform(203,374.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AAAAoIgDAAIgDgBIgBgBIgBgBIgahGIAAgCIAAgBIAAAAIAAgBIABgBIACgBIADAAIAEABIACAAIABABIABABIAUA9IABABIAAgBIAUg9IABgBIABgBIACAAIAEgBIADAAIACABIABABIABABIAAAAIAAABIgBABIAAABIgZBGIgBABIgCABIgDABIgEAAg");
	this.shape_42.setTransform(195,374.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AAAA3IgCAAIgCAAIgCgBIAAgBIAAhKIAAgBIACgBIACAAIACgBIAEABIACAAIABABIAAABIAABKIAAABIgBABIgCAAIgEAAgAgGgoQgCgBAAgFQAAgFACgCQACgBAEAAQAFAAACABQABACAAAFQAAAFgBABQgCACgFAAQgEAAgCgCg");
	this.shape_43.setTransform(189.2,372.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AAZAoIgDAAIgCAAIgBgBIAAgBIAAgrIgBgKIgDgHIgFgEQgDgCgEAAQgEAAgGAEQgFADgFAIIAAAzIgBABIgBABIgCAAIgDAAIgEAAIgCAAIgBgBIAAgBIAAhKIAAgBIABgBIACAAIADgBIADABIACAAIABABIAAABIAAAKQAHgHAGgDQAGgDAGAAQAHAAAFACQAFACADAFQAEAEABAFQABAHAAAIIAAAsIAAABIgBABIgCAAIgEAAg");
	this.shape_44.setTransform(182.7,374.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgQA0QgHgCgGgFQgEgFgEgIQgDgHAAgKIAAhCIABgBIABgBIACAAIAEgBIADABIACAAIACABIAAABIAABAQAAAHACAGQACAGADADQADAEAFACQAFACAFAAQAGAAAFgCQAFgCAEgEQADgDABgGQACgFAAgHIAAhBIAAgBIACgBIACAAIADgBIAEABIACAAIABABIAAABIAABBQAAAJgCAIQgDAIgFAFQgGAFgIADQgHADgJAAQgIAAgIgDg");
	this.shape_45.setTransform(172.8,373.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgOApIgEAAIgCgBIAAgBIgBgBIAAhKIABgBIAAAAIACgBIAEAAIADAAIABABIABAAIAAABIAAALIAHgHIADgEIAFgDIAFAAIADAAIACAAIADABIACABIABABIAAAAIAAACIAAADIAAADIAAACIgBABIgBAAIgCAAIgCgBIgCAAIgEAAIgEAAIgEADIgEAFIgFAIIAAAwIgBABIgBABIgBABIgEAAg");
	this.shape_46.setTransform(459.3,350.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgQAnQgHgEgEgFQgFgFgCgHQgCgIAAgJQAAgIACgIQACgIAFgGQAFgFAHgDQAHgDAJAAQAJAAAHACQAHAEAEAEQAFAGACAIQACAHAAAJQAAAIgCAIQgCAHgFAHQgFAFgHADQgHADgJAAQgJAAgHgCgAgJgaQgFACgCADQgDAFgCAFQgBAGAAAFQAAAGABAGQABAFADAEQACAEAFACQAEACAGABQAGAAAEgCQAFgDADgEQADgDABgGQABgFAAgHIgBgLIgEgJQgCgEgFgCQgEgDgHAAQgFAAgEADg");
	this.shape_47.setTransform(451.3,350.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgKAoIgGgBIgEgCIgDgCIgCgDIgBgDIABgDIAAgCIABgBIABAAIADABIAEADIAGACIAIABIAGAAIAFgDIADgEIABgFQAAgDgBgCQgCgDgDgBIgGgDIgFgCIgHgEIgHgDIgEgHQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAFgCQAFgCAGAAIAGAAIAFABIAEACIADACIABABIABABIAAABIAAADIAAADIAAABIgBABIgBABIgDgBIgDgCIgGgDIgGgBIgFABIgFADIgDADIAAAEQgBADACADIAFADIAEAEIAHACIAIADIAGAEQACADACADQACADgBAFQAAAGgCAFQgBAEgFADQgEADgFACQgFABgGAAIgIgBg");
	this.shape_48.setTransform(443.5,350.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgKAoIgFgBIgGgCIgCgCIgCgDIgBgDIABgDIABgCIAAgBIABAAIADABIAEADIAGACIAIABIAGAAIAFgDIADgEIABgFQAAgDgBgCQgCgDgDgBIgGgDIgFgCIgHgEIgHgDIgEgHQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAFgCQAFgCAGAAIAGAAIAFABIAEACIADACIABABIABABIAAABIAAADIAAADIAAABIgBABIgBABIgDgBIgDgCIgGgDIgGgBIgGABIgEADIgDADIgBAEQAAADACADIAFADIAEAEIAHACIAHADIAHAEQADADABADQABADAAAFQAAAGgCAFQgBAEgFADQgEADgFACQgFABgGAAIgIgBg");
	this.shape_49.setTransform(436.9,350.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgMAnQgHgDgEgFQgFgFgDgIQgCgIAAgJQAAgJACgIQADgHAFgGQAEgGAGgCQAHgDAIAAQAIAAAGADQAHADADAEQAFAFABAGQACAHAAAIIAAACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgEABIgwAAIABALQACAFADADQACAEAFACQAFACAFAAIAKgBIAHgCIAFgCIADgBIABAAIABABIAAACIAAADIAAABIAAACIAAABIgBABIgDACIgFACIgJABIgKABQgIAAgHgCgAgHgcQgEADgCACIgFAIQgBAEAAAFIAoAAQAAgLgFgGQgFgGgKgBQgEAAgEACg");
	this.shape_50.setTransform(429.3,350.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgEA6IgDAAIgCAAIgCgBIAAgBIAAhBIgLAAIgCgBIAAgEIAAgDIAAgCIABgBIABAAIALAAIAAgIQAAgIACgFQABgGADgDQADgEADgCQAFgBAGAAIAGAAIAEABIACABIABACIAAACIAAACIAAADIAAABIgBABIgBAAIgBAAIgCgBIgDgBIgEAAIgFABIgEADIgCAGIAAAIIAAAIIAQAAIACAAIAAABIABACIAAADIgBAEQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgQAAIAABBIgBABIgBABIgBAAIgDAAg");
	this.shape_51.setTransform(422.7,348.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgQAnQgHgEgEgFQgFgFgCgHQgCgIAAgJQAAgIACgIQACgIAFgGQAFgFAHgDQAHgDAJAAQAJAAAHACQAHAEAEAEQAFAGACAIQACAHAAAJQAAAIgCAIQgCAHgFAHQgFAFgHADQgHADgJAAQgJAAgHgCgAgJgaQgFACgCADQgDAFgCAFQgBAGAAAFQAAAGABAGQABAFADAEQACAEAFACQAEACAGABQAGAAAEgCQAFgDADgEQADgDABgGQABgFAAgHIgBgLIgEgJQgCgEgFgCQgEgDgHAAQgFAAgEADg");
	this.shape_52.setTransform(415.4,350.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgOApIgDAAIgCgBIgCgBIAAgBIAAhKIAAgBIACAAIACgBIACAAIADAAIADABIABAAIAAABIAAALIAFgHIAFgEIAFgDIAEAAIACAAIAEAAIACABIABABIABABIAAAAIABACIAAADIAAADIgBACIAAABIgBAAIgCAAIgCgBIgDAAIgDAAIgEAAIgEADIgEAFIgFAIIAAAwIAAABIgBABIgCABIgEAAg");
	this.shape_53.setTransform(408.5,350.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgZA2IgEAAIgCAAIgBgBIAAgBIAAhjQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBIAEgBIAYAAIAFAAIAIABIAJAEIAHAGQADAFACAEQACAGAAAGQAAAHgDAHQgDAHgFADQgEAEgHADQgIACgIAAIgNAAIAAAoIgBABIgBABIgCAAIgDAAgAgSABIANAAQAGAAADgBQAFgBADgEQADgDABgDIABgJQAAgHgCgEQgCgEgDgDIgIgDIgGAAIgOAAg");
	this.shape_54.setTransform(401,349.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgQAnQgHgEgEgFQgFgFgCgHQgCgIAAgJQAAgIACgIQACgIAFgGQAFgFAHgDQAHgDAJAAQAJAAAHACQAHAEAEAEQAFAGACAIQACAHAAAJQAAAIgCAIQgCAHgFAHQgFAFgHADQgHADgJAAQgJAAgHgCgAgJgaQgFACgCADQgDAFgCAFQgBAGAAAFQAAAGABAGQABAFADAEQACAEAFACQAEACAGABQAGAAAEgCQAFgDADgEQADgDABgGQABgFAAgHIgBgLIgEgJQgCgEgFgCQgEgDgHAAQgFAAgEADg");
	this.shape_55.setTransform(387.9,350.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgRA3QgGgDgDgFQgEgGgCgHQgBgHAAgJQAAgJACgIQACgGAEgGQAEgFAGgDQAGgDAIAAQAFAAAGADQAFACAGAGIAAgrIAAgBIABgBIACgBIADAAIAEAAIACABIABABIAAABIAABtIAAABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIgBgBIAAgKQgGAGgGAEQgGAEgHAAQgIAAgGgEgAgJgIQgDADgDAEQgCADgBAFIgBAKIABALIADAJQACAFAEACQADADAGAAIAEgBIAFgCIAGgFIAGgGIAAgfQgGgFgFgEQgFgDgFAAQgFgBgEADg");
	this.shape_56.setTransform(378.7,348.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgMAnQgHgDgFgFQgFgFgCgIQgCgIgBgJQABgJACgIQACgHAFgGQAFgGAHgCQAHgDAGAAQAJAAAHADQAFADAEAEQAFAFACAGQACAHAAAIIAAACQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABIgEABIgwAAIABALQACAFACADQADAEAFACQAEACAHAAIAJgBIAHgCIAFgCIADgBIABAAIABABIAAACIABADIgBABIAAACIgBABIAAABIgDACIgGACIgIABIgKABQgIAAgHgCgAgHgcQgEADgDACIgEAIQgBAEAAAFIAnAAQABgLgFgGQgFgGgKgBQgEAAgEACg");
	this.shape_57.setTransform(366.4,350.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AAwApIgCAAIgDgBIgBgBIgBgBIAAgtIAAgIIgDgHIgEgEQgDgCgEABQgFAAgEADQgGAEgFAGIAAA0IAAABIgCABIgCABIgDAAIgCAAIgDgBIgBgBIAAgBIAAgtIAAgIIgDgHQgCgCgDgCQgDgCgEABQgFAAgEADQgFAEgGAGIAAA0IAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgBIAAgBIAAhKIAAgBIABAAIACgBIADAAIADAAIACABIABAAIAAABIAAAKQAGgHAGgDQAGgDAHAAIAIABQAEABACABIAEAGIADAFIAHgHIAHgEIAGgCIAGgBQAHAAAFACQAFADADAEQADAEACAGIAAALIAAAvIAAABIgBABIgCABIgEAAg");
	this.shape_58.setTransform(355.4,350.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgQAnQgHgEgEgFQgFgFgCgHQgCgIAAgJQAAgIACgIQACgIAFgGQAFgFAHgDQAHgDAJAAQAJAAAHACQAHAEAEAEQAFAGACAIQACAHAAAJQAAAIgCAIQgCAHgFAHQgFAFgHADQgHADgJAAQgJAAgHgCgAgJgaQgFACgCADQgDAFgCAFQgBAGAAAFQAAAGABAGQABAFADAEQACAEAFACQAEACAGABQAGAAAEgCQAFgDADgEQADgDABgGQABgFAAgHIgBgLIgEgJQgCgEgFgCQgEgDgHAAQgFAAgEADg");
	this.shape_59.setTransform(344.1,350.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AggA2IgEAAIgCAAIgBgBIAAgBIAAhjQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIAHAAIAFAAIADACIACADIADAEIAYAuIAFAIIADAIIAFAIIADAIIAAgOIAAgNIAAg6IAAgBIABgBIADAAIAEAAIADAAIACAAIABABIABABIAABiIgBAEIgBACIgDABIgCAAIgEAAIgFAAIgCgCIgEgEIgDgFIggg8IgEgKIgGgKIAAAAIAAAMIAAANIAABAIAAABIgBABIgCAAIgDAAg");
	this.shape_60.setTransform(334.2,349.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AAAAmIgDAAIgDgBIgBgDIgBgFIABgFIABgDIADgBIADgBIAEABIADABIABADIABAFIgBAFIgBADIgDABIgEAAgAgDgTIgDgBIgBgDIgBgFIABgEIABgDIADgCIADAAIAEAAIADACIABADIABAEIgBAFIgBADIgDABIgEABIgDgBg");
	this.shape_61.setTransform(326.5,350.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AAAA6IgCAAIgDAAIgBgBIAAgBIAAhvIAAgBIABgBIADAAIACAAIADAAIADAAIABABIAAABIAABvIAAABIgBABIgDAAIgDAAg");
	this.shape_62.setTransform(322.2,348.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgMAnQgHgDgFgFQgFgFgCgIQgCgIgBgJQABgJACgIQACgHAFgGQAFgGAHgCQAHgDAGAAQAJAAAHADQAFADAFAEQAEAFACAGQACAHAAAIIAAACQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABIgEABIgwAAIABALQACAFACADQADAEAFACQAEACAHAAIAJgBIAHgCIAFgCIADgBIABAAIABABIAAACIABADIgBABIAAACIgBABIAAABIgDACIgGACIgIABIgKABQgIAAgHgCgAgHgcQgEADgDACIgDAIQgCAEAAAFIAnAAQABgLgFgGQgFgGgKgBQgEAAgEACg");
	this.shape_63.setTransform(316,350.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AAAAoIgDAAIgDAAIgBgBIgBgCIgahGIAAgBIAAgCIAAgBIAAgBIABgBIACAAIADAAIAEAAIACAAIABABIABACIAUA8IABABIAAgBIAUg8IABgCIABgBIACAAIAEAAIADAAIACAAIABABIABABIAAACIAAAAIgBABIAAABIgZBGIgBACIgCABIgDAAIgEAAg");
	this.shape_64.setTransform(307.9,350.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgOA6QgFgCgDgDQgEgDgCgEQgCgFAAgEQAAgHADgFQADgEAEgDQAFgEAHgBQAHgCAIABIAKAAIAAgHIgBgGQgBgDgCgCQgCgCgDgCQgDgBgFAAQgEAAgEABIgHADIgFACIgDACIgBgBIgBgBIgBgBIAAgCIAAgEIACgCIAEgCIAGgDIAIgCIAHgBQAIAAAGACQAGACADADQAEAEABAFQACAFAAAGIAAAzIgBABIgCABIgDAAIgEAAIgBgBIgBgBIAAgIQgFAGgGACQgGADgGAAQgGAAgEgBgAgDAWIgHADQgDACgBADIgCAGQAAAGAEADQAEADAGAAQAFAAAEgCQAFgDAFgGIAAgQIgMAAIgIABgAABggIgCAAIgBgBIgBgBIABgBIALgUIABgCIACAAIACgBIADAAIAEAAIACABIABABIgBACIgPAUIgBABIgBABIgCAAIgDAAg");
	this.shape_65.setTransform(299.7,348.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgJAoIgHgBIgEgCIgEgCIgBgDIgBgDIABgDIAAgCIABgBIABAAIADABIAEADIAHACIAIABIAFAAIAFgDIADgEIABgFQAAgDgCgCQgBgDgDgBIgGgDIgGgCIgGgEIgHgDIgEgHQgCgDAAgFQAAgFADgDQABgEADgDQAEgDAFgCQAFgCAGAAIAGAAIAFABIAEACIADACIABABIABABIAAABIAAADIAAADIAAABIgCABIgBABIgCgBIgDgCIgGgDIgHgBIgEABIgFADIgCADIgBAEQAAADACADIADADIAFAEIAIACIAHADIAFAEQAEADABADQABADAAAFQAAAGgBAFQgDAEgEADQgDADgGACQgFABgFAAIgIgBg");
	this.shape_66.setTransform(292.6,350.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AAZApIgDAAIgCgBIgBgBIAAgBIAAgrIgBgKIgDgHIgFgEQgDgCgEABQgEAAgGADQgFAEgFAGIAAA0IgBABIgBABIgCABIgDAAIgEAAIgCgBIgBgBIAAgBIAAhKIAAgBIABAAIACgBIADAAIADAAIACABIABAAIAAABIAAAKQAHgHAGgDQAGgDAGAAQAHAAAFACQAFADADAEQAEAEABAGQABAGAAAHIAAAtIAAABIgBABIgCABIgEAAg");
	this.shape_67.setTransform(284.8,350.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AgQAnQgHgEgEgFQgFgFgCgHQgCgIAAgJQAAgIACgIQACgIAFgGQAFgFAHgDQAHgDAJAAQAJAAAHACQAHAEAEAEQAFAGACAIQACAHAAAJQAAAIgCAIQgCAHgFAHQgFAFgHADQgHADgJAAQgJAAgHgCgAgJgaQgFACgCADQgDAFgCAFQgBAGAAAFQAAAGABAGQABAFADAEQACAEAFACQAEACAGABQAGAAAEgCQAFgDADgEQADgDABgGQABgFAAgHIgBgLIgEgJQgCgEgFgCQgEgDgHAAQgFAAgEADg");
	this.shape_68.setTransform(275.8,350.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgbA3IgDAAIgCAAIgBgBIgBgBIAAhoIABgBIABgBIACAAIACAAIADAAIADAAIABABIAAABIAAALIAHgHIAFgEIAHgCIAHgBQAHAAAGADQAGADADAGQAEAFACAHQACAIgBAIQAAAJgBAHQgDAIgEAGQgEAFgGADQgGADgIAAIgFgBIgGgCIgFgDIgGgGIAAAmIAAABIgBABIgCAAIgEAAgAgCgqIgGADIgFAEIgHAHIAAAdQAGAHAFADQAFAEAFAAQAFAAAEgCQADgDADgEIADgIIABgLIgBgLIgDgJQgBgEgFgDQgDgCgGAAIgDAAg");
	this.shape_69.setTransform(267.1,352.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgJAoIgHgBIgFgCIgDgCIgBgDIAAgDIAAgDIABgCIAAgBIABAAIADABIAEADIAHACIAIABIAFAAIAFgDIADgEIABgFQAAgDgCgCQgBgDgDgBIgGgDIgGgCIgHgEIgFgDIgFgHQgBgDgBgFQAAgFACgDQACgEAEgDQADgDAFgCQAFgCAGAAIAGAAIAFABIAFACIACACIABABIAAABIAAABIABADIgBADIAAABIgBABIgBABIgBgBIgEgCIgFgDIgIgBIgFABIgEADIgCADIgBAEQAAADACADIADADIAGAEIAHACIAGADIAGAEQADADACADQABADABAFQAAAGgCAFQgDAEgDADQgEADgGACQgFABgFAAIgIgBg");
	this.shape_70.setTransform(259.1,350.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgMAnQgHgDgFgFQgEgFgDgIQgCgIgBgJQABgJACgIQADgHAEgGQAFgGAGgCQAIgDAGAAQAJAAAHADQAGADAEAEQADAFADAGQACAHAAAIIAAACQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABIgEABIgwAAIABALQABAFADADQADAEAFACQAFACAFAAIAKgBIAHgCIAFgCIADgBIABAAIABABIAAACIAAADIAAABIAAACIgBABIAAABIgDACIgGACIgIABIgKABQgIAAgHgCgAgHgcQgEADgDACIgDAIQgCAEAAAFIAnAAQABgLgFgGQgFgGgKgBQgEAAgEACg");
	this.shape_71.setTransform(251.5,350.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AAcA2IgDAAIgDAAIgBgBIgBgCIgKgZIgDgIIgFgHIgFgEQgDgBgFAAIgKAAIAAAuIAAABIgBABIgCAAIgEAAIgDAAIgCAAIgCgBIAAgBIAAhjQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAXAAIAHAAIAEABIALADQAFACADAEQADAEACAEQABAFAAAFQAAAGgBAEQgCAEgCADIgHAHIgIACIAEAEIAEAEIAEAGIADAGIAKAYIABAFIABACIgBABIgBABIgCAAIgEAAgAgVgFIAOAAQAGAAADgCQAEAAADgDQADgDABgDQABgDAAgEQAAgGgDgFQgCgEgHgCIgEgBIgHAAIgMAAg");
	this.shape_72.setTransform(243.1,349.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3469B6").s().p("EhBCAEOIAAobMCCFAAAIAAIbg");
	this.shape_73.setTransform(350,299.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(652));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(283.8,293.6,832.6,291.4);
// library properties:
lib.properties = {
	width: 700,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Nidia_animacao04.mp3?1530293998539", id:"Nidia_animacao04"},
		{src:"sounds/Poppy_clWho_Else8472_hifi_aditado.mp3?1530293998539", id:"Poppy_clWho_Else8472_hifi_aditado"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;