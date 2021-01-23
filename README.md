The project shows how to project the content of a component into a modal.<br/>

This is useful for cases where the component size is smaller than its content size (e.g. card), 
and you want to comfortably view/edit that content in a modal instead of scrolling inside the component.<br/>

In case you edit the component the data binding remain when displayed in the modal.<br/>

![](https://github.com/zohar1000/ngx-modalable/blob/master/docs/assets/recording.gif)


# how to implement in your project

The project uses ngx-bootstrap to open the modal.<br/>
Just wrap your content in app-modalable and pass it a boolean @Input() indicating the expansion state.
