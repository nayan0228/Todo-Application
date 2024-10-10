  deleteTask(task_id: number) {
    this.apiService.deleteTask(task_id)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }