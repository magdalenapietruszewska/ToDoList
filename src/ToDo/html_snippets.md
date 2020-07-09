# HTML Snippets

### Formularz dodawania zadania
```html
<div class="jumbotron">
  <h1 class="display-4">Add new task</h1>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" name="title" placeholder="Title">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" name="description" placeholder="Description">
    </div>
    <input type="submit" value="Add" class="btn btn-primary"/>
  </form>
</div>
```

### Pojedynczy "task" z otwartym formularzem dodawania operacji
```html
<section class="card">
    <div class="card-body">
      <h5 class="card-title">{task title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{task description}</h6>
      <a href="#" class="card-link">Add operation</a>
      <a href="#" class="card-link">Finish</a>

      <form class="mt-3">
        <div class="form-group">
          <input type="text" class="form-control" name="description" placeholder="Operation description">
        </div>
        <input type="submit" value="Add operation to task" class="btn btn-primary"/>
      </form>
    </div>

    <ul class="list-group list-group-flush">
      // Tutaj trafią pojedyncze operacje w tasku
    </ul>
</section>
```

### Widok operacji - podstawowy
```html
<li class="list-group-item d-flex justify-content-between align-items-center">
  Operation description
  <div>
    <button class="btn btn-primary">Add time manually</button>
    <button class="btn btn-primary ml-3">Start timer</button>
  </div>
</li>
```

### Widok operacji - po kliknięciu "Start timer"
```html
<li class="list-group-item d-flex justify-content-between align-items-center">
  Operation description
  <div>
    <span class="btn btn-warning">Czas: 1h 23m</span>
    <button class="btn btn-primary ml-3">Stop timer</button>
  </div>
</li>
```

### Widok operacji - po kliknięciu "Add time manually"
```html
<li class="list-group-item task-operation d-flex justify-content-between align-items-center">
  Operation description

  <form class="d-flex">
    <input type="text" class="form-control" name="time" placeholder="Type in spend time">
    <button class="btn btn-primary ml-3">Save</button>
  </form>
</li>
```

### Widok operacji - po kliknięciu "Stop timer" lub "Save" (w manualnym wpisywaniu czasu)
```html
<li class="list-group-item">
  Operation description
  <span class="badge badge-primary badge-pill">Czas: 1h 23m</span>
</li>
```
