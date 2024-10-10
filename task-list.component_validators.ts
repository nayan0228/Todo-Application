  ngOnInit() {
    this.getTasks();

    this.task_form = this.form_builder.group({
      title: '',
      content: ''
    });

    // Set validators for fields.
    this.task_form.controls["title"].setValidators([Validators.required]);
    this.task_form.controls["content"].setValidators([Validators.required]);
  }