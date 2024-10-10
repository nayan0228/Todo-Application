  // Update a Task.
  public putTask(the_task: Task) {
    return this.http.put(`${this.API_URL}/task/${the_task.id}/`,the_task);
  }

  // Delete a Task.
  public deleteTask(task_id: number) {
    return this.http.delete(`${this.API_URL}/task/${task_id}/`);
  }

function putTask(the_task: any, Task: any) {
  throw new Error("Function not implemented.");
}
