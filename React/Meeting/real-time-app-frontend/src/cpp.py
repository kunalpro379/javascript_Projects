import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm, t, f, chi2, gamma

# Define the range for x values
x = np.linspace(-5, 5, 1000)
x_f = np.linspace(0, 5, 1000)  # For F-distribution and Gamma
x_chi2 = np.linspace(0, 15, 1000)  # For Chi-square
x_gamma = np.linspace(0, 10, 1000)  # For Gamma distribution

# Plot Z-distribution (standard normal distribution)
plt.plot(x, norm.pdf(x, 0, 1), label='Z-distribution (Normal)', color='blue')

# Plot t-distributions with different degrees of freedom
df_values = [5, 10, 30]
for df in df_values:
    plt.plot(x, t.pdf(x, df), label=f't-distribution (df={df})')

# Plot F-distributions with different degrees of freedom
f_df1 = [2, 5, 10]  # Numerator degrees of freedom
f_df2 = [10, 10, 10]  # Denominator degrees of freedom
for i, (df1, df2) in enumerate(zip(f_df1, f_df2)):
    plt.plot(x_f, f.pdf(x_f, df1, df2), label=f'F-distribution (df1={df1}, df2={df2})', linestyle='--')

# Plot Chi-square distributions with different degrees of freedom
chi2_df = [2, 5, 10]
for df in chi2_df:
    plt.plot(x_chi2, chi2.pdf(x_chi2, df), label=f'Chi-square (df={df})', linestyle=':')

# Plot Gamma distributions with different shape parameters
gamma_shape = [1, 2, 5]
for shape in gamma_shape:
    plt.plot(x_gamma, gamma.pdf(x_gamma, shape), label=f'Gamma (shape={shape})', linestyle='-.')

# Add labels and legend
plt.title('Transitions between Various Distributions')
plt.xlabel('x')
plt.ylabel('Density')
plt.legend()
plt.grid(True)

# Show plot
plt.show()
