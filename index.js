class TagElement {
    constructor({data, api, config}) {
        this.wrapper = null;
        this.content = [];
        this.config = config || {as_a_string: false, limit: 5};
    }

    static get toolbox() {
        return {
          title: 'Tag',
          icon: '<i class="fas fa-tags"></i>'
        };
      }
    
    render() {
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'please separate by comma');
        div.classList.add('wrapper');
        input.classList.add('tagInput');

        input.addEventListener('keyup', (e) => {
            // checking is pressed comma or not
            if (e.keyCode == 188) {
                // if input value is not empty then create tag
                if (e.target.value.replace(/[ ,.]/g, "") && this.content.length < this.config.limit) {
                    this.content.push(e.target.value.replace(/[ ,.]/g, ""));
                    e.target.value = '';
                    this.createTag();
                } else {
                    e.target.value = '';
                    return false;
                }
            }
        });

        // remove tag when user press backspace or del button
        input.addEventListener('keydown', (e) => {
            if ((e.keyCode === 8 || e.keyCode === 46) && !e.target.value.replace(/[ ,.]/g, "")) {
                let index = this.content.length-1;
                this.content.splice(index, 1);
                document.querySelectorAll('.wrapper > span.tag').forEach((el) => {
                    if(index === parseInt(el.dataset.index)) {
                        el.remove();
                    }
                });
            }
        });

        div.appendChild(input);
        this.wrapper = div;
        return this.wrapper;
    }

    save(block) {
        // by default return tags as a array
        let data = this.content;
        // user config 
        if (this.config.as_a_string) {
            data = this.content.toString();
        }
        return {
            tags: data
        };
    }

    createTag() {
        const spans = document.querySelectorAll('.wrapper > span');
        const input = document.querySelector('.tagInput');
        // remove all tag from dom before create new one or it will show duplicat tags in dom 
        spans.forEach(function(e){
            e.remove();
        });
        // create tags and preview
        this.content.forEach((e, index) => {
            // this span will hold tag strings or text
            const span = document.createElement('span');
            // this span is for remove or delete tag
            const closebtn = document.createElement('span');
            const text = document.createTextNode(e);

            closebtn.classList.add('close');
            span.classList.add('tag');
            span.setAttribute('data-index', index);
            closebtn.innerHTML='x';
            span.appendChild(text);
            span.appendChild(closebtn);
            this.wrapper.insertBefore(span, input);

            closebtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.removeTag(e);
            });
        });
    }

    removeTag(element) {
        const index = +element.target.parentNode.dataset.index;
        //after mouse click  it will focus out from input element
        // and user have to manually focus again to remove tag by backspace or del
        document.querySelector('.tagInput').focus();
        
        this.content.splice(index, 1);
        element.target.parentNode.remove();
    }
}

export default window.TagElement = TagElement;