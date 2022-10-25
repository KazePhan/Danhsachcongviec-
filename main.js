window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task');
  const list_task = document.querySelector('#tasks');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert('Hãy thêm công việc vào trong danh sách');
      return;
    }
    const task_el = document.createElement('div');
    task_el.classList.add('task');
    const task_content = document.createElement('div');
    task_content.classList.add('content');
    task_el.appendChild(task_content);
    const task_input = document.createElement('input');
    task_input.classList.add('text');
    task_input.type = 'text';
    task_input.value = task;
    task_input.setAttribute('readonly', 'readonly');
    task_content.appendChild(task_input);
    list_task.appendChild(task_el);
    const action = document.createElement('div');
    action.classList.add('action');
    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = 'Sửa';
    const task_delete = document.createElement('button');
    task_delete.classList.add('delete');
    task_delete.innerHTML = 'Xóa';
    action.appendChild(edit);
    action.appendChild(task_delete);
    task_el.appendChild(action);
    input.value = '';
    edit.addEventListener('click', () => {
      if (edit.innerText.toLowerCase() == 'edit') {
        task_input.removeAttribute('readonly');
        task_input.focus();
        edit.innerText = 'LƯU';
      } else {
        task_input.setAttribute('readonly', 'readonly');
        edit.innerText = 'SỬA';
        alert('Lưu thành công');
      }
    });
    task_delete.addEventListener('click', () => {
      list_task.removeChild(task_el);
      alert('Xóa công việc thành công');
    });
  });
});
