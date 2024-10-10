  updateTask(task) {
    this.apiService.putTask(task)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }