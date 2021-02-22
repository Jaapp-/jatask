const TaskType = {
  MONTHLY: "monthly",
  WEEKLY: "weekly",
  ONCE: "once",
};

const idChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const idLength = 10;

const generateId = () => {
  let id = "";
  for (let i = 0; i < idLength; i++) {
    id += idChars.charAt(Math.floor(Math.random() * idChars.length));
  }
  return id;
};

export class Task {
  id;
  name;
  description;
  type; // 'monthly', 'weekly', 'once'
  createdAt;

  constructor({ id, name, description, type, createdAt, completions }) {
    this.id = id || generateId();
    this.name = name || "";
    this.description = description || "";
    this.type = type || TaskType.ONCE;
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
    this.completions = completions ? completions.map((c) => new Date(c)) : [];
  }

  isActive() {
    if (this.type === "monthly") {
    }
  }

  isCompleted() {
    const lastCompletion = this.getLastCompletion();
    if (!lastCompletion) return false;
    const now = new Date();
    switch (this.type) {
      case TaskType.MONTHLY:
        return (
          lastCompletion.getMonth() === now.getMonth() &&
          lastCompletion.getFullYear() === now.getFullYear()
        );
      case TaskType.WEEKLY:
        return (
          lastCompletion.getFullYear() === now.getFullYear() &&
          lastCompletion.getWeek() === now.getWeek()
        );
      case TaskType.ONCE:
        return true;
    }
  }

  /**
   * @returns {null|Date}
   */
  getLastCompletion() {
    if (this.completions.length === 0) return null;
    return this.completions[this.completions.length - 1];
  }

  complete() {
    this.completions.push(new Date());
  }
}

const storedTaskData = localStorage.getItem("tasks");
const taskData = storedTaskData ? JSON.parse(storedTaskData) : [];

/**
 * @type {Task[]}
 */
export const tasks = taskData.map((t) => new Task(t));
console.log(tasks);

export const saveTasks = () => {
  localStorage["tasks"] = JSON.stringify(tasks);
};
