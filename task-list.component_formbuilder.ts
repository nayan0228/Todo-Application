  task_form: FormGroup;
  [...]
  ngOnInit() {
    this.task_form = this.form_builder.group({
      title: '',
      content: ''
    });
  }