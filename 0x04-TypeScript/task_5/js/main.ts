// task_5/js/main.ts
// Task 11: Brand Convention & Nominal Typing
// This demonstrates how to create type safety for structurally identical but conceptually different data

// ===== BRANDED TYPE INTERFACES =====

// MajorCredits interface with brand property
// The brand property makes this type unique, even though it's structurally just a number
interface MajorCredits {
  credits: number;
  // Brand property: This exists only at compile time for type differentiation
  // The 'unique symbol' type ensures this brand is truly unique
  readonly __brand: 'MajorCredits';
}

// MinorCredits interface with brand property  
// Even though this has the same structure as MajorCredits, the different brand makes it a distinct type
interface MinorCredits {
  credits: number;
  // Different brand value makes this a completely different type from MajorCredits
  readonly __brand: 'MinorCredits';
}

// ===== BRANDED TYPE FUNCTIONS =====

// Function that adds MajorCredits together
// Note: This function can ONLY accept MajorCredits, not MinorCredits or plain numbers
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // Create a new MajorCredits object with the sum
  // We must include the brand property to satisfy the interface
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  } as MajorCredits;
}

// Function that adds MinorCredits together
// Note: This function can ONLY accept MinorCredits, not MajorCredits or plain numbers
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // Create a new MinorCredits object with the sum
  // We must include the brand property to satisfy the interface
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  } as MinorCredits;
}

// ===== HELPER FUNCTIONS FOR CREATING BRANDED TYPES =====

// Factory function to create MajorCredits safely
// This ensures all MajorCredits objects are created consistently
function createMajorCredits(credits: number): MajorCredits {
  return {
    credits: credits,
    __brand: 'MajorCredits'
  } as MajorCredits;
}

// Factory function to create MinorCredits safely
// This ensures all MinorCredits objects are created consistently  
function createMinorCredits(credits: number): MinorCredits {
  return {
    credits: credits,
    __brand: 'MinorCredits'
  } as MinorCredits;
}

// ===== COMPREHENSIVE DEMONSTRATION =====

console.log('=== BRAND CONVENTION & NOMINAL TYPING DEMONSTRATION ===');

// Create some major credit subjects
const computerScience: MajorCredits = createMajorCredits(30);
const mathematics: MajorCredits = createMajorCredits(25);
const physics: MajorCredits = createMajorCredits(28);

// Create some minor credit subjects
const statistics: MinorCredits = createMinorCredits(12);
const businessAdmin: MinorCredits = createMinorCredits(15);
const psychology: MinorCredits = createMinorCredits(10);

console.log('\n--- Major Credits Subjects ---');
console.log('Computer Science:', computerScience);
console.log('Mathematics:', mathematics);
console.log('Physics:', physics);

console.log('\n--- Minor Credits Subjects ---');
console.log('Statistics:', statistics);
console.log('Business Administration:', businessAdmin);
console.log('Psychology:', psychology);

// Demonstrate safe addition of same credit types
console.log('\n--- Safe Credit Calculations ---');

const totalMajorCredits = sumMajorCredits(computerScience, mathematics);
console.log('Computer Science + Mathematics (Major Credits):', totalMajorCredits);

const totalMinorCredits = sumMinorCredits(statistics, businessAdmin);
console.log('Statistics + Business Admin (Minor Credits):', totalMinorCredits);

// Demonstrate multiple major credit additions
const allMajorCredits = sumMajorCredits(totalMajorCredits, physics);
console.log('All Major Credits Combined:', allMajorCredits);

// Demonstrate multiple minor credit additions
const allMinorCredits = sumMinorCredits(totalMinorCredits, psychology);
console.log('All Minor Credits Combined:', allMinorCredits);

// ===== TYPE SAFETY DEMONSTRATIONS =====

console.log('\n=== TYPE SAFETY FEATURES ===');

// These operations work because types match
console.log('✓ Major + Major credits allowed');
console.log('✓ Minor + Minor credits allowed');

// The following operations would cause TypeScript errors if uncommented:
// sumMajorCredits(computerScience, statistics);     // ❌ Error: Cannot mix Major and Minor credits
// sumMinorCredits(mathematics, psychology);         // ❌ Error: Cannot mix Major and Minor credits  
// sumMajorCredits(totalMajorCredits, 15);          // ❌ Error: Cannot use plain number
// sumMinorCredits(10, businessAdmin);              // ❌ Error: Cannot use plain number

console.log('✓ TypeScript prevents mixing Major and Minor credits');
console.log('✓ TypeScript prevents using plain numbers as branded types');
console.log('✓ Complete type safety maintained throughout the system');

// ===== REAL-WORLD SIMULATION =====

console.log('\n=== UNIVERSITY GRADUATION REQUIREMENTS ===');

// Simulate checking graduation requirements
function checkGraduationRequirements(majorCredits: MajorCredits, minorCredits: MinorCredits): string {
  const majorRequired = 120;
  const minorRequired = 30;
  
  const majorMet = majorCredits.credits >= majorRequired;
  const minorMet = minorCredits.credits >= minorRequired;
  
  if (majorMet && minorMet) {
    return `🎓 Graduation Requirements Met! Major: ${majorCredits.credits}/${majorRequired}, Minor: ${minorCredits.credits}/${minorRequired}`;
  } else {
    return `📚 More credits needed. Major: ${majorCredits.credits}/${majorRequired}, Minor: ${minorCredits.credits}/${minorRequired}`;
  }
}

// Test graduation status
const graduationStatus = checkGraduationRequirements(allMajorCredits, allMinorCredits);
console.log(graduationStatus);

// ===== ADVANCED DEMONSTRATIONS =====

console.log('\n=== ADVANCED BRANDED TYPE FEATURES ===');

// Demonstrate that branded types maintain their identity through operations
function displayCreditSummary(credits: MajorCredits | MinorCredits): string {
  // TypeScript knows this is either MajorCredits or MinorCredits, not just a number
  if ('__brand' in credits && credits.__brand === 'MajorCredits') {
    return `Major Credits: ${credits.credits} (toward primary degree)`;
  } else {
    return `Minor Credits: ${credits.credits} (toward specialization)`;
  }
}

console.log(displayCreditSummary(allMajorCredits));
console.log(displayCreditSummary(allMinorCredits));

// Demonstrate arrays of branded types
const majorCourses: MajorCredits[] = [computerScience, mathematics, physics];
const minorCourses: MinorCredits[] = [statistics, businessAdmin, psychology];

console.log('\nMajor Course Credits:');
majorCourses.forEach((course, index) => {
  console.log(`  ${index + 1}. ${course.credits} credits`);
});

console.log('\nMinor Course Credits:');
minorCourses.forEach((course, index) => {
  console.log(`  ${index + 1}. ${course.credits} credits`);
});

console.log('\n=== NOMINAL TYPING BENEFITS DEMONSTRATED ===');
console.log('✓ Prevents accidental mixing of conceptually different data');
console.log('✓ Maintains type safety even with structurally identical types');
console.log('✓ Enables domain-specific type systems');
console.log('✓ Catches logical errors at compile time');
console.log('✓ Self-documenting code through explicit type relationships');
console.log('✓ Supports complex business logic with type enforcement');

console.log('\n🎊 CONGRATULATIONS! You have mastered TypeScript! 🎊');
