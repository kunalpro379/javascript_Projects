import random
import numpy as np
import time
import os

# Maze size
maze_size = 10

# Generate a 10x10 maze (1 = open path, 0 = wall)
maze = np.random.choice([1, 0], size=(maze_size, maze_size), p=[0.7, 0.3])

# Ensure start and end points are open
start = (0, 0)
end = (maze_size-1, maze_size-1)
maze[start] = 1
maze[end] = 1

def print_maze(maze):
    os.system('cls' if os.name == 'nt' else 'clear')  # Clear the console
    for row in maze:
        print(' '.join(str(cell) for cell in row))
    print()
    time.sleep(0.1)

def quantum_search(maze, start, end):
    def oracle(state):
        return state == end

    def amplification(current_state, maze):
        x, y = current_state
        neighbors = [(x-1, y), (x+1, y), (x, y-1), (x, y+1)]
        valid_neighbors = [(nx, ny) for nx, ny in neighbors if 0 <= nx < maze_size and 0 <= ny < maze_size and maze[nx, ny] == 1]
        return random.choice(valid_neighbors) if valid_neighbors else current_state
    
    current_state = start
    path = [current_state]
    
    while current_state != end:
        current_state = amplification(current_state, maze)
        if current_state in path:  # Avoid loops
            continue
        path.append(current_state)
        maze[current_state] = '*'
        print_maze(maze)

        if oracle(current_state):
            print(f"Found the end at {current_state}!")
            return path
    
    print("Failed to find the end using quantum search simulation.")
    return path

# Convert maze to str for visualization and mark the path
maze_visual = np.array([['1' if cell == 1 else '0' for cell in row] for row in maze])

# Display the initial maze
print("Initial Maze:")
print_maze(maze_visual)

# Perform quantum search simulation
print("Performing quantum search simulation...")
path = quantum_search(maze_visual, start, end)

# Display the final path
print("Final Path:")
print_maze(maze_visual)
