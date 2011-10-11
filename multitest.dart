#library('multitest');

#import('dart:html');

class MyIsolate extends Isolate {
	String isolateName;
	void main() {
		var i = 0;
		while (true) {
			print(this.isolateName);
		}
		
	}

	void init(String isolateName) {
		this.isolateName = isolateName;

		Isolate.bind(void _() { main(); });
	}
}


void createIsolate(String name) {
	new MyIsolate().spawn().then((SendPort port) {
		var message = {"id": "init", "args":["ameno"]};
		port.call(message);
	});

}

void doIt() {
	createIsolate("hello");
	createIsolate("goodbye");
}

main() {
	Isolate.bind(void _() { doIt(); });
}
