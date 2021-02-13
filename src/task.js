export class Task {
  name;
  description;
  type; // 'monthly', 'weekly', 'once'
  createdAt;

  constructor({ name, description, type, createdAt, completions }) {
    this.name = name || "";
    this.description = description || "";
    this.type = type || "oneshot";
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
      case "monthly":
        return (
          lastCompletion.getMonth() === now.getMonth() &&
          lastCompletion.getFullYear() === now.getFullYear()
        );
      case "weekly":
        return (
          lastCompletion.getFullYear() === now.getFullYear() &&
          lastCompletion.getWeek() === now.getWeek()
        );
      case "once":
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
}

const storedTaskData = localStorage.getItem("tasks");
const taskData = storedTaskData ? JSON.parse(storedTaskData) : [];

/**
 * @type {Task[]}
 */
export const tasks = taskData.map((t) => new Task(t));

export const saveTasks = () => {
  localStorage["tasks"] = JSON.stringify(tasks);
};
