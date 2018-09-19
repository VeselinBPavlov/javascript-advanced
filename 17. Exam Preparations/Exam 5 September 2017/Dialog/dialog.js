class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.input = [];
        this.element = null;
    }

    addInput(label, name, type) {
        this.input.push({ label, name, type });
    }

    render() {
        this.element = $('<div class="overlay">');
        let innerDiv = $('<div class="dialog">');
        innerDiv.append(`<p>${this.message}</p>`);
        for (let obj of this.input) {
            innerDiv.append(`<label>${obj.label}</label>`);
            innerDiv.append(`<input name="${obj.name}" type="${obj.type}">`);
        }
        innerDiv.append($('<button>OK</button>').on('click', this._ok.bind(this)));
        innerDiv.append($('<button>Cancel</button>').on('click', this._cancel.bind(this)));
        this.element.append(innerDiv);
        $('body').append(this.element);
    }

    _ok() {
        let obj = {};
        let inputs = $(this.element).find('input').toArray();
        inputs.forEach(i => obj[$(i).attr('name')] = $(i).val());
        this.callback(obj);
        this._cancel();
    }

    _cancel() {
        this.element.remove();
    }
}